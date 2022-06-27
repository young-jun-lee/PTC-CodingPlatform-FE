import axios from "axios";
import { create } from "domain";
import { useState } from "react";
import {
	useCreateSubmissionMutation,
	useExistingSubmissionMutation,
	useUploadFileMutation,
} from "../generated/graphql";

const DEFAULT_MAX_SIZE = 15e6;

export interface AWSProps {
	metadata: { question: string; email: string };
	file: File;
	path: string;
	maxSize?: number;
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
function useAWSUpload() {
	const [progress, setProgress] = useState<number>(0);
	const [, uploadFile] = useUploadFileMutation();
	const [, existingSubmission] = useExistingSubmissionMutation();
	const [, createSubmission] = useCreateSubmissionMutation();

	/**
	 * @description Uploads a passed file to a public read AWS bucket
	 *
	 * @param {File} fileSubmission Must pass in a File -> input.files[0]
	 * @param {string} path No trailing slashes! - A string representing the path where the file will be stored
	 * @param {number} [maxSize=DEFAULT_MAX_SIZE] The maximum size of the file, defaults to 15mb
	 *
	 * @returns {string} fileKey
	 */

	async function handleUpload({
		file,
		metadata,
		path,
		maxSize = DEFAULT_MAX_SIZE,
	}: AWSProps) {
		const existingSubmissionObject = await existingSubmission({
			question: metadata.question,
		});
		console.log(existingSubmissionObject);
		const existingSubmissionData =
			existingSubmissionObject.data?.existingSubmission;
		if (existingSubmissionData?.errors)
			return existingSubmissionData.errors;

		if (!file) throw new Error("Did you forget to attach a file?");
		// Get the file type and name
		const fileType = file.name.split(".").pop();

		if (fileType !== "py")
			throw new Error("You did not attach a python file");
		if (file.size > maxSize) throw new Error("Your file is too large");
		if (file.size === 0)
			throw new Error("Did you forget to attach a file?");
		console.log(
			`filename: ${file.name}\n metadata: ${metadata}\n path: ${path}`
		);
		const s3UploadData = await uploadFile({
			presignedUrlInput: {
				fileName: file.name,
				fileType,
				metadata,
				path,
			},
		});

		if (s3UploadData.error) {
			throw new Error(
				"s3 Presigned Url could not be generated: ",
				s3UploadData.error
			);
		}
		console.log("Printing s3 URL from useAwsUpload: ", s3UploadData);
		if (!s3UploadData.data?.uploadFile?.uploadData) {
			return;
		}
		const fileKey = s3UploadData.data?.uploadFile?.uploadData?.fileKey;
		const signedRequest =
			s3UploadData.data?.uploadFile?.uploadData?.signedRequest;

		// TODO: do err handling on axios request
		await axios.put(signedRequest, file);
		if (existingSubmissionData?.existing) {
			console.log("existing");
		}
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
		console.log(submissionData);
	}

	return {
		handleUpload,
		progress,
	};
}
