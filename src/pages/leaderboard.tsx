import React, { useState, useEffect } from "react";
//import axios from 'axios';

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
// ismport Style from '../styles/Leaderboard.css';
// import Footer from './Footer';
// import { formatMongoData } from '../content/PLeaderboardFunction/pLeaderboardFunctions';

const PLeaderboard = () => {
	const [pLeaderboardInfo, setPLeaderboardInfo] = useState([]);
	const [pLeaderboardInfoSub, setPLeaderboardInfoSub] = useState([]);

	//   async function getPLeaderboardInfo() {
	//     await axios
	//       .get(`${process.env.REACT_APP_BACK_END_ENDPOINT}/leaderboard/personal`)
	//       .then((res) => {
	//         setPLeaderboardInfo(formatMongoData(res.data[0]));
	//         setPLeaderboardInfoSub(formatMongoData(res.data[0]));
	//       })
	//       .catch((err) => console.log(err));
	//   }

	//   useEffect(() => {
	//     getPLeaderboardInfo();
	//   }, []);

	return (
		<div className='section' id='leaderboard'>
			<Navbar />
			<Banner page='Leaderboard'>Leaderboard</Banner>
			<table>
				<thead>
					<tr className='table-headers'>
						<th className='titleHeader'>Week</th>
						<th className='titleHeader'>Question</th>
						<th className='titleHeader'>Points</th>
					</tr>
				</thead>
				<tbody>
					{/* {pLeaderboardInfo.map((question, index) => (
            <tr key={index}>
              <td>{question.week}</td>
              <td>{`Question ${question.question} - Part ${question.part}`}</td>
              {question.score ? <td>{question.score}</td> : <td>0</td>}
            </tr>
          ))} */}
				</tbody>
			</table>
		</div>
	);
};

export default PLeaderboard;
