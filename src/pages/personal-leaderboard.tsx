import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
// import Style from "../styles/Leaderboard.css";
import Footer from "../components/Footer";
// import { formatMongoData } from "../content/PLeaderboardFunction/pLeaderboardFunctions";

const PLeaderboard = () => {
	const [pLeaderboardInfo, setPLeaderboardInfo] = useState([]);
	const [pLeaderboardInfoSub, setPLeaderboardInfoSub] = useState([]);

	// async function getPLeaderboardInfo() {
	// 	await axios
	// 		.get(
	// 			`${process.env.REACT_APP_BACK_END_ENDPOINT}/leaderboard/personal`
	// 		)
	// 		.then((res) => {
	// 			setPLeaderboardInfo(formatMongoData(res.data[0]));
	// 			setPLeaderboardInfoSub(formatMongoData(res.data[0]));
	// 		})
	// 		.catch((err) => console.log(err));
	// }

	// useEffect(() => {
	// 	getPLeaderboardInfo();
	// }, []);

	return (
		<div className='section' id='leaderboard'>
			<Navbar />
			<Banner page='Personal Leaderboard' />
			<table>
				<thead>
					<tr className='table-headers'>
						<th className='titleHeader'>Week</th>
						<th className='titleHeader'>Question</th>
						<th className='titleHeader'>Points</th>
					</tr>
				</thead>
				<tbody>1</tbody>
			</table>
		</div>
	);
};

export default PLeaderboard;
