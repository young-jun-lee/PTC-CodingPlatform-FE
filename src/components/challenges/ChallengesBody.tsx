import React, { FC } from "react";
import { WeekProps } from "../../common/Interfaces";
import Tabs from "./Tabs";
import { checkDate } from "../../utils/checkDate";

const ChallengesBody: FC<WeekProps> = ({ week }) => {
	const { checkStartDate } = checkDate();

	const authWeek = () => {
		const releaseWeek = checkStartDate();

		// return true;
		return week <= releaseWeek ? true : false;
	};

	const viewWeek = authWeek();

	return (
		<div className='section' id='home'>
			{viewWeek && (
				<div className='challenges-container'>
					<Tabs week={week} />
				</div>
			)}
			{!viewWeek && (
				<div>{`You are not authorized to see week ${week} yet.`}</div>
			)}
		</div>
	);
};

export default ChallengesBody;
