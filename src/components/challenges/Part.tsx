import React, { useContext, useState, useEffect, FC } from 'react';
import axios from 'axios';
import { PartsProps, ProblemKeyProps } from '../../common/Interfaces';
import { useAWS } from '../../utils/useAWSUpload';
import ScrollableMenu from './ScrollableMenu';
import { useChangePasswordMutation, useMeQuery } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';

const Part: FC<PartsProps> = ({ problemKeys, questionNum, week }) => {
	const [file, setFile] = useState();
	const [submitMessage, setSubmitMessage] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [submissionMessage, setSubmissionMessage] = useState('');
	const [uploadFileInput, setUploadFileInput] = useState({});
	const [{ data, fetching }] = useMeQuery();

	const { handleUpload, progress } = useAWS();
	// const { handleGetUpload, viewFileprogress } = useAWS();

	function getData(spec) {
		if (Array.isArray(spec)) {
			return spec.map((sample) => <div>{sample}</div>);
		}
		return <div>{spec}</div>;
	}

	const onChange = (e) => {
		setFile(e.target.files[0]);
	};

	function deadlineCutoff() {
		const today = new Date(Date.now());
		const week1End = new Date(Date.UTC(2021, 6, 12, 4, 0, 0));
		const week2End = new Date(Date.UTC(2021, 6, 19, 4, 0, 0));
		const week3End = new Date(Date.UTC(2021, 6, 26, 4, 0, 0));
		const week4End = new Date(Date.UTC(2021, 7, 2, 4, 0, 0));

		if (week === 4 && today.getTime() > week4End.getTime()) {
			return false;
		} else if (week === 3 && today.getTime() > week3End.getTime()) {
			return false;
		} else if (week === 2 && today.getTime() > week2End.getTime()) {
			return false;
		} else if (week === 1 && today.getTime() > week1End.getTime()) {
			return false;
		} else {
			return true;
		}
	}

	const onSubmit = async (e, questionPart: string) => {
		e.preventDefault();
		try {
			// if (!deadlineCutoff()) {
			// 	setSubmitMessage(
			// 		"The deadline has passed and submissions are now closed"
			// 	);
			// 	return;
			// }
			if (!file) {
				setSubmitMessage('You have not entered a file to submit.');
				return;
			}
			const res = await handleUpload({
				file,
				metadata: {
					question: `${week}${questionNum}${questionPart}`,
					username: `${data?.me?.username}`
				},
				path: `${week}${questionNum}${questionPart}/${data?.me?.username}`
			});
			console.log('Result called from Part: ', res);
			setSubmitMessage('You have successfully submitted the file.');
			// console.log(res);
		} catch (error) {
			if (error instanceof Error) {
				setSubmitMessage(error.message);
			} else {
				setSubmitMessage(
					'Something went wrong. Please ensure you are logged in and try again.'
				);
			}
			setDisabled(!disabled);
		} finally {
			if (file) {
				setDisabled(!disabled);
			}
		}
	};

	const viewSubmission = async (e, part: string) => {
		e.preventDefault();
		console.log(`${week}${questionNum}${part}`);
		window.open(`/viewSubmission/${week}${questionNum}${part}`);
		// try {
		// 	const res = await handleGetUpload(`${week}${questionNum}${part}`);
		// 	console.log(
		// 		`PresignedURL from : ${week}${questionNum}${part}`,
		// 		res
		// 	);
		// 	const presignedURL = res.data?.viewFile?.uploadData?.signedRequest;
		// 	if (typeof presignedURL === 'string') {
		// 		const file = axios
		// 			.get(presignedURL)
		// 			.then((res) => {
		// 				console.log(res);
		// 				console.log(res.data);
		// 			})
		// 			.catch((err) => console.log(err));
		// 	}
		// 	window.open(`/viewSubmission/${week}${questionNum}${part}`);
			// window.open(presignedURL);
		// } catch (error) {
		// 	if (error instanceof Error) {
		// 		setSubmitMessage(error.message);
		// 	} else {
		// 		setSubmitMessage(
		// 			'Something went wrong. Please ensure you are logged in and try again.'
		// 		);
		// 	}
		// }
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
				<form
					className='problem-button-container'
					// onSubmit={(e) => onSubmit(e, problemKeys.part)}
				>
					{/* {console.log("variables: ", variables)} */}
					{/* {console.log("data: ", data)} */}
					{/* {status.loggedIn?.admin && (
						<>
							<ScrollableMenu
								question={`${week}${props.questionNum}${props.problemKeys.part}`}
							/>
						</>
					)}

					{!status.loggedIn?.loggedIn && (
						<>
							<div>Please log in to submit a file</div>
						</>
					)} */}

					<>
						{/* {status.loggedIn?.week === parseInt(props.week) && ( */}
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
								onClick={(e) => onSubmit(e, problemKeys.part)}
								className='file-submit-button problem-button'
								style={
									disabled
										? {
												opacity: 0.4,
												fontColor: 'black'
										  }
										: { opacity: 1.0 }
								}
							/>
							<div>{submitMessage}</div>
						</>
						{/* )} */}
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

export default withUrqlClient(createUrqlClient)(Part);
