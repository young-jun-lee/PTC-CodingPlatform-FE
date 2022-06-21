import React from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import ChallengesBody from "../../components/challenges/ChallengesBody";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Challenges: NextPage<{ week: string }> = () => {
	const themes: any = {
		1: "Basics",
		2: "Math",
		3: "Dynamic Programming",
		4: "Combo",
	};
	const router = useRouter();
	console.log(router.query.week);
	const week = parseInt(
		typeof router.query.week === "string" ? router.query.week : ""
	);
	console.log(`week: ${week}`);
	return (
		<div className='section' id='home'>
			<Navbar />
			<Banner page={`Week ${week} : ${themes[week]}`} />
			<ChallengesBody week={week} />
		</div>
	);
};

export default Challenges;
