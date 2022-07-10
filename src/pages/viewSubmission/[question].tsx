import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAWS } from "../../utils/useAWSUpload";

import { NextPage } from "next";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const ViewSubmission: NextPage<{}> = () => {
	const [submissionData, setSubmissionData] = useState("");
	const [question, setQuestion] = useState("   ");
	const router = useRouter();

	const { handleGetUpload, viewFileprogress } = useAWS();

	const viewFile = async (part: string, submissionFound: boolean) => {
		console.log(`${question}`);
		try {
			const res = await handleGetUpload(`${question}`);
			console.log(`PresignedURL from : ${question}`, res);
			const presignedURL = res.data?.viewFile?.uploadData?.signedRequest;
			if (typeof presignedURL === "string") {
				const file = axios
					.get(presignedURL)
					.then((res) => {
						console.log(res);
						console.log(res.data);
						setSubmissionData(res.data);
					})
					.catch((err) => console.log(err));
			}
			// window.open(`/viewSubmission/${question}`);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log("error occured - we aren't sure what");
			}
			submissionFound = false;
		}
	};

	var submissionFound = true;

	useEffect(() => {
		if (typeof router.query.question === "string") {
			setQuestion(router.query.question);
		}
		console.log(`question: ${question}`);
		console.log(question);
		submissionFound = typeof question === "string";
		if (typeof question === "string") {
			viewFile(question, submissionFound);
			submissionFound = true;
		} else {
			submissionFound = false;
		}
	}, []);

	return submissionFound ? (
		<>
			<div className='view-submission-container'>
				{/* <img className='ptc-logo' src={data.ptcIcon} alt='#'></img> */}

				<h2 className='view-submission-header'>
					{`Your submission for`}
					<br />
					<h2 className='view-sub-qname'>
						{`Week ${question[0]}, Question ${question[1]}, Part ${question[2]}`}
					</h2>
					{`is shown below:`}
				</h2>
				{/* <div>{`Date: ${date}`}</div> */}
				<div className='view-submission-box'>
					<pre className='view-submission-content'>
						{submissionData}
					</pre>
				</div>
			</div>
		</>
	) : (
		<> An error has occured... </>
		// <div className='view-submission-container no-submission-found'>

		// 	<h2 className='view-submission-header'>{`You have not yet submitted a file for Week ${question[0]}, Question ${match.params.question[1]}, Part ${match.params.question[2]}.`}</h2>
		// 	<h4 className='view-submission-information'>
		// 		Please submit a file and try this button again.
		// 	</h4>
		// 	<h4 className='view-submission-information'>
		// 		If you are having technical issues submitting, please contact{' '}
		// 		<b>tech@projecttechconferences.ca</b> at least 24 hours ahead of
		// 		the deadline.
		// 	</h4>
		// </div>
	);
};

export default withUrqlClient(createUrqlClient)(ViewSubmission);
