import React, { useContext, useState, useEffect, FC } from "react";
import axios from "axios";
import { PartsProps, ProblemKeyProps } from "../../common/Interfaces";
import { useAWS } from "../../utils/useAWSUpload";
import { checkDate } from "../../utils/checkDate";
import ScrollableMenu from "./ScrollableMenu";
import { useChangePasswordMutation, useMeQuery } from "../../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Part: FC<PartsProps> = ({ problemKeys, questionNum, week }) => {
	const [file, setFile] = useState();
	const [submitMessage, setSubmitMessage] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [submissionMessage, setSubmissionMessage] = useState("");
	const [uploadFileInput, setUploadFileInput] = useState({});
	const [{ data, fetching }] = useMeQuery();
	const { checkStartDate, checkEndDate } = checkDate();
	const { handleUpload, handleGetUpload, viewFileprogress } = useAWS();

	function getData(spec: any) {
		if (Array.isArray(spec)) {
			return spec.map((sample, index) => <div key={index}>{sample}</div>);
		}
		return <div>{spec}</div>;
	}

	const onChange = (e: any) => {
		setFile(e.target.files[0]);
	};

	const onSubmit = async (
		e: React.MouseEvent<HTMLInputElement, MouseEvent>,
		questionPart: string
	) => {
		e.preventDefault();
		try {
			if (!checkEndDate(week)) {
				setSubmitMessage(
					"The deadline has passed and submissions are now closed"
				);
				return;
			}
			if (!file) {
				setSubmitMessage("You have not entered a file to submit.");
				return;
			}
			const res = await handleUpload({
				file,
				metadata: {
					question: `${week}${questionNum}${questionPart}`,
					username: `${data?.me?.username}`,
				},
				path: `${week}${questionNum}${questionPart}/${data?.me?.username}`,
			});
			console.log("Result called from Part: ", res);
			setSubmitMessage("You have successfully submitted the file.");
			// console.log(res);
		} catch (error) {
			if (error instanceof Error) {
				setSubmitMessage(error.message);
			} else {
				setSubmitMessage(
					"Something went wrong. Please ensure you are logged in and try again."
				);
			}
			setDisabled(!disabled);
		} finally {
			if (file) {
				setDisabled(!disabled);
			}
		}
	};

	const viewSubmission = async (e: any, part: string) => {
		e.preventDefault();
		console.log(`${week}${questionNum}${part}`);
		try {
			const res = await handleGetUpload(`${week}${questionNum}${part}`);
			console.log(
				`PresignedURL from : ${week}${questionNum}${part}`,
				res
			);
			const presignedURL = res.data?.viewFile?.uploadData?.signedRequest;
			window.open(presignedURL);
		} catch (error) {
			if (error instanceof Error) {
				setSubmitMessage(error.message);
			} else {
				setSubmitMessage(
					"Something went wrong. Please ensure you are logged in and try again."
				);
			}
		}
	};

	return (
		<div key={problemKeys.part}>
			<div className='part-title'>{`PART ${problemKeys.part} [${problemKeys.points} POINTS]`}</div>
			<hr className='linebreak'></hr>
			<div className='part-text'>{problemKeys.problemDescription}</div>
			<div className='part-subtitle part-grid'>
				<div>Input</div>
				<div className='part-italics'>Sample Input</div>
			</div>
			<hr className='linebreak'></hr>
			<div className='part-text part-grid'>
				<div>{problemKeys.inputSpecification}</div>
				<div className='part-sample'>
					{getData(problemKeys.sampleInput)}
				</div>
			</div>

			<div className='part-subtitle part-grid'>
				<div>Output</div>
				<div className='part-italics'>Sample Output</div>
			</div>
			<hr className='linebreak'></hr>
			<div className='part-text part-grid'>
				<div>{problemKeys.outputSpecification}</div>
				<div className='part-sample'>
					{getData(problemKeys.sampleOutput)}
				</div>
			</div>

			<div className='part-subtitle part-grid'>
				<div>Hints and Resources</div>
				<div className='part-italics'>Submit a Solution</div>
			</div>
			<hr></hr>
			<div className='part-grid part-text'>
				<div className='add-hints'>
					{problemKeys?.hints?.map((hint, index) => (
						<div key={index}>
							<a className='hint-links' href={hint.link}>
								{hint.text}
							</a>
							<br />
						</div>
					))}
				</div>
				<form className='problem-button-container'>
					{/* {data?.me && data?.me.isAdmin && (
						<>
							<ScrollableMenu
								question={`${week}${questionNum}${problemKeys.part}`}
							/>
						</>
					)} */}

					{!data?.me && (
						<>
							<div>Please log in to submit a file</div>
						</>
					)}

					<>
						{checkStartDate() === week && (
							<>
								<input
									type='file'
									accept='text/plain'
									className='choose-file-button problem-button'
									id='choose-file'
									onChange={onChange}
								/>
								<input
									disabled={disabled}
									type='submit'
									onClick={(e) =>
										onSubmit(e, problemKeys.part)
									}
									className='file-submit-button problem-button'
									style={
										disabled
											? { opacity: 0.4 }
											: { opacity: 1.0 }
									}
								/>
								<div>{submitMessage}</div>
							</>
						)}
						{/* {status.loggedIn?.week !== parseInt(props.week) && (
							<>
								<div>
									You are no longer able to submit for this
									week
								</div>
								<br></br>
							</>
						)} */}
						<button
							className='problem-button file-submit-button view-button'
							onClick={(e) => viewSubmission(e, problemKeys.part)}
						>
							View Submission
						</button>
						<div>{submissionMessage}</div>
					</>
				</form>
			</div>
		</div>
	);
};

export default Part;
