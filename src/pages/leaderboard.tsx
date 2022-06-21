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
	const [variables, setVariables] = useState({
		username: "test1",
	});
	const [{ data, fetching }] = useTopScoresQuery();
	const router = useRouter();

	if (!fetching && !data) {
		return (
			<div className='section' id='leaderboard'>
				<Navbar />
				<Banner page='TOP 10 Leaderboard' />
				<div>Query returned no results.</div>
			</div>
		);
	}
	return (
		<div className='section' id='leaderboard'>
			<Navbar />
			<Banner page='TOP 10 Leaderboard' />
			{!data?.topScores && fetching ? (
				<p>data is loading...</p>
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
								<td>{post.points}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default withUrqlClient(createUrqlClient)(Leaderboard);
