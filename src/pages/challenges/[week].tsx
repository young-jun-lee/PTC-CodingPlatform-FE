import React from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import ChallengesBody from "../../components/challenges/ChallengesBody";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Challenges: NextPage<{ week: string }> = () => {
	const themes = {
		week1: "Basics",
		week2: "Math",
		week3: "Dynamic Programming",
		week4: "Combo",
	};
	const router = useRouter();

	return (
		<div className='section' id='home'>
			<Navbar />
			{console.log(router.query)}
			<Banner
				page={`${router.query.week} : ${themes[router.query.week]}`}
			/>
			<ChallengesBody week={`${router.query.week}`} />
		</div>
	);
};

export default Challenges;
