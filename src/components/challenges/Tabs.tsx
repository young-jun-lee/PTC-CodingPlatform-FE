import React, { FC, useState } from "react";
import Problem from "./Problem";
import { WeekProps } from "../../common/Interfaces";

const Tabs: FC<WeekProps> = ({ week }) => {
	const [toggleState, setToggleState] = useState(1);

	function toggleTab(index: number) {
		setToggleState(index);
	}

	return (
		<div className='section' id='home'>
			{/* <div className="tab-rectangle"></div> */}
			<div className='bloc-tabs'>
				<div
					className={
						toggleState === 1 ? "tabs active-tabs" : "inactive"
					}
					onClick={() => toggleTab(1)}
				>
					Problem 1
					<span
						className={
							toggleState === 1 ? "panelHeader" : "inactive"
						}
					></span>
				</div>

				<div
					className={
						toggleState === 2 ? "tabs active-tabs" : "inactive"
					}
					onClick={() => toggleTab(2)}
				>
					Problem 2
					<span
						className={
							toggleState === 2 ? "panelHeader" : "inactive"
						}
					></span>
				</div>

				<div
					className={
						toggleState === 3 ? "tabs active-tabs" : "inactive"
					}
					onClick={() => toggleTab(3)}
				>
					Problem 3
					<span
						className={
							toggleState === 3 ? "panelHeader" : "inactive"
						}
					></span>
				</div>
			</div>

			<div className='content-tabs'>
				<div className='content-tabs'>
					<div
						className={
							toggleState === 1
								? "content active-content"
								: "content"
						}
					>
						<Problem questionNum={1} week={week} />
					</div>

					<div
						className={
							toggleState === 2
								? "content active-content"
								: "content"
						}
					>
						<Problem questionNum={2} week={week} />
					</div>

					<div
						className={
							toggleState === 3
								? "content active-content"
								: "content"
						}
					>
						<Problem questionNum={3} week={week} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
