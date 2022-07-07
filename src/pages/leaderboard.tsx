import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useTopScoresQuery, useUserPointsQuery } from "../generated/graphql";

const Leaderboard = () => {
	const [pLeaderboardInfo, setPLeaderboardInfo] = useState();
	const [pLeaderboardInfoSub, setPLeaderboardInfoSub] = useState([]);
	const [{ data, fetching }] = useTopScoresQuery();
	const router = useRouter();

	if (!fetching && !data) {
		return (
			<div className='section' id='leaderboard'>
				<Navbar />
				<Banner page='TOP 10 Leaderboard' />
				<div className='leaderboardContainer'>
					<div>Query returned no results.</div>
				</div>
			</div>
		);
	}
	return (
		<div className='section' id='leaderboard'>
			<Navbar />
			<Banner page='TOP 10 Leaderboard' />
			{console.log(data)}
			{!data?.topScores && fetching ? (
				<div className='leaderboardContainer'>
					<p>data is loading...</p>
				</div>
			) : (
				<table>
					<thead>
						<tr className='table-headers'>
							<th className='titleHeader'>Rank</th>
							<th className='titleHeader'>Username</th>
							<th className='titleHeader'>Points</th>
						</tr>
					</thead>
					<tbody>
						{console.log(data?.topScores)}
						{data!.topScores?.map((post, index) => (
							<tr key={index}>
								<td>{post.rank}</td>
								<td>{post.username}</td>
								<td>{post.totalPoints}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default withUrqlClient(createUrqlClient)(Leaderboard);
