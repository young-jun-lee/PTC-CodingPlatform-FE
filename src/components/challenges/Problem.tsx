import { FC } from "react";
import Part from "./Part";
import { ContentProps, ProblemProps } from "../../common/Interfaces";
import Week1Content from "../../content/questions/week1";
import Week2Content from "../../content/questions/week2";
import Week3Content from "../../content/questions/week3";
import Week4Content from "../../content/questions/week4";

const Problem: FC<ProblemProps> = ({ questionNum, week }) => {
	const questionKey = questionNum - 1;

	const getContent = () => {
		if (week === 4) {
			return Week4Content;
		} else if (week === 3) {
			return Week3Content;
		} else if (week === 2) {
			return Week2Content;
		} else if (week === 1) {
			return Week1Content;
		}
		return Week1Content;
	};

	const content: ContentProps = getContent();

	return (
		<div className='section' id='home'>
			<div className='problem-container'>
				<div className='problem-title' key={questionKey}>
					{`PROBLEM ${questionNum} : ${content.Problems[questionKey].Title}`}
				</div>

				<div className='paragraph-container'>
					<div className='paragraph-text'>
						{content.Problems[questionKey].Paragraph}
					</div>
					<div>
						{content.Problems[questionKey].Images?.map(
							(image, index) => (
								<div key={index}>
									<img
										src={image.link.src}
										width='400'
										height='400'
									></img>
									<br />
								</div>
							)
						)}
					</div>
				</div>

				<div className='question-parts'>
					{content.Problems[questionKey].Parts.map(
						(problemKeys, index) => (
							<Part
								problemKeys={problemKeys}
								questionNum={questionNum}
								week={week}
								key={index}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Problem;
