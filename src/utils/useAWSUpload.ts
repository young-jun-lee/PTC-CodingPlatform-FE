import axios from "axios";
import { create } from "domain";
import { useState } from "react";
import {
	useCreateSubmissionMutation,
	useDeleteFileMutation,
	useExistingSubmissionMutation,
	useUploadFileMutation,
	useViewFileMutation,
} from "../generated/graphql";

const DEFAULT_MAX_SIZE = 15e6;

export interface AWSProps {
	metadata: { question: string; username: string };
	file: File;
	path: string;
	maxSize?: number;
}

export interface ViewFileProps {
	question: string;
}

export interface DBProps {
	existing: boolean;
	question: string;
	fileKey: string;
	id?: number | null;
	creatorId?: number | null;
	updates?: number | null;
}

export /**
 * @description Provides callbacks and functions to upload files to a public-read AWS bucket
 *
 */
function useAWS() {
	const [progress, setProgress] = useState<number>(0);
	const [viewFileprogress, setViewFileProgress] = useState<number>(0);
	const [, uploadFile] = useUploadFileMutation();
	const [, deleteFile] = useDeleteFileMutation();
	const [, existingSubmission] = useExistingSubmissionMutation();
	const [, createSubmission] = useCreateSubmissionMutation();
	const [, viewFile] = useViewFileMutation();

	/**
	 * @description Uploads a passed file to a public read AWS bucket
	 *
	 * @param {File} fileSubmission Must pass in a File -> input.files[0]
	 * @param {string} path No trailing slashes! - A string representing the path where the file will be stored
	 * @param {number} [maxSize=DEFAULT_MAX_SIZE] The maximum size of the file, defaults to 15mb
	 *
	 * @returns {string} fileKey
	 */

	async function handleGetUpload(question: string) {
		const presignedURL = await viewFile({ question });
		return presignedURL;
	}

	async function handleUpload({
		file,
		metadata,
		path,
		maxSize = DEFAULT_MAX_SIZE,
	}: AWSProps) {
		const existingSubmissionObject = await existingSubmission({
			question: metadata.question,
		});

		const existingSubmissionData =
			existingSubmissionObject.data?.existingSubmission;
		if (existingSubmissionData?.errors)
			throw new Error(existingSubmissionData.errors[0].message);

		if (!file) throw new Error("Did you forget to attach a file?");
		// Get the file type and name
		const fileType = file.name.split(".").pop();

		if (fileType !== "py")
			throw new Error(
				"Submissions must be a python file. Please refresh the page and submit a python file."
			);
		if (file.size > maxSize) throw new Error("Your file is too large");
		if (file.size === 0)
			throw new Error("Did you forget to attach a file?");

		if (existingSubmissionData?.existing) {
			if (existingSubmissionData.fileKey) {
				const deleteSubData = await deleteFile({
					fileKey: existingSubmissionData.fileKey,
				});
				if (deleteSubData.error) {
					throw new Error(
						"Previous submission could not be deleted."
					);
				}
			}
		}

		const s3UploadData = await uploadFile({
			presignedUrlInput: {
				fileName: file.name,
				fileType,
				metadata,
				path,
			},
		});
		// console.log(s3UploadData);
		if (s3UploadData.error?.graphQLErrors) {
			console.log(s3UploadData.error?.graphQLErrors);
			throw new Error(
				"Something went wrong. Please ensure you are logged in and try again." +
					"If this error persists please email us at coding.challenge@projecttechconferences.com ASAP"
			);
		}
		if (s3UploadData.data?.uploadFile?.errors) {
			throw new Error(s3UploadData.data.uploadFile.errors[0].message);
		}

		if (!s3UploadData.data?.uploadFile?.uploadData) {
			return;
		}
		const fileKey = s3UploadData.data?.uploadFile?.uploadData?.fileKey;
		const signedRequest =
			s3UploadData.data?.uploadFile?.uploadData?.signedRequest;

		// TODO: do err handling on axios request
		await axios.put(signedRequest, file);

		const dbSubmission = await uploadDB({
			existing: existingSubmissionData.existing,
			question: metadata.question,
			fileKey,
			id: existingSubmissionData?.id,
			creatorId: existingSubmissionData?.creatorId,
			updates: existingSubmissionData?.updates,
		});
		return fileKey;
	}

	async function uploadDB({
		existing,
		question,
		fileKey,
		id,
		creatorId,
		updates,
	}: DBProps) {
		const submissionData = await createSubmission({
			options: { existing, question, fileKey, id, creatorId, updates },
		});
	}

	return {
		handleUpload,
		handleGetUpload,
		progress,
		viewFileprogress,
	};
}
