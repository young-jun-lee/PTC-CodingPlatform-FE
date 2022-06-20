import React, { useEffect, useState } from "react";
// import axios from "axios";
import Part from "./Part";
// import style from "../../styles/Problem.css";
import Week1Content from "../../content/questions/week1";
// import Week2Content from "../../content/questions/Week2";
// import Week3Content from "../../content/questions/Week3";
// import Week4Content from "../../content/questions/Week4";

const Problem = (props) => {
	const questionNum = props.number - 1;

	const getContent = () => {
		return Week1Content;
		// if (props.week === "4") {
		// 	return Week4Content;
		// } else if (props.week === "3") {
		// 	return Week3Content;
		// } else if (props.week === "2") {
		// 	return Week2Content;
		// } else if (props.week === "1") {
		// 	return Week1Content;
		// }
	};
	const content = getContent();

	return (
		<div className='section' id='home'>
			<div className='problem-container'>
				<div className='problem-title' key={props.number}>
					{`PROBLEM ${props.number} : ${content.Problems[questionNum].Title}`}
				</div>

				<div className='paragraph-container'>
					<div className='paragraph-text'>
						{content.Problems[questionNum].Paragraph}
					</div>
				</div>

				<div className='question-parts'>
					{content.Problems[questionNum].Parts.map((thisPart) => (
						<Part
							thisPart={thisPart}
							questionNum={props.number}
							week={props.week}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Problem;
