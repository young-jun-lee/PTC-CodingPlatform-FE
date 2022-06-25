import axios from "axios";
import { useState } from "react";
import { useUploadFileMutation } from "../generated/graphql";

const DEFAULT_MAX_SIZE = 15e6;

export interface Props {
	metadata: object;
	file: File;
	path: string;
	maxSize?: number;
}

/**
 * @description Provides callbacks and functions to upload files to a public-read AWS bucket
 *
 */
export function useAWSUpload() {
	const [progress, setProgress] = useState<number>(0);
	const [_, uploadFile] = useUploadFileMutation();
	// const [_, login] = useLoginMutation();

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
	}: Props) {
		console.log("Printing file from handleUpload: ", file);

		if (!file) throw new Error("Did you forget to attach a file?");
		// Get the file type and name
		const fileType = file.name.split(".").pop();

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
		const mimeFileType =
			s3UploadData.data.uploadFile.uploadData.mimeFileType;
		// const { signedRequest, fileKey } = res;

		// Default headers from passport.js interfering - Borrowed from V1
		// delete axios.defaults.headers.common['Authorization'];

		// Initializing the headers
		// const options = {
		// 	withCredentials: true,
		// 	headers: {
		// 		"Content-Type": "text/plain",
		// 	},
		// };
		// 	onUploadProgress: (progressEvent: any) => {
		// 		setProgress(
		// 			Math.round(
		// 				(progressEvent.loaded * 100) / progressEvent.total
		// 			)
		// 		);
		// 	},
		// };

		await axios.put(signedRequest, file);
		return fileKey;
	}

	return {
		handleUpload,
		progress,
	};
}
