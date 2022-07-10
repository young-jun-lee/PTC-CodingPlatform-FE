import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useTopScoresQuery } from "../generated/graphql";
import { checkDate } from "../utils/checkDate";

const Leaderboard = () => {
	const [{ data, fetching }] = useTopScoresQuery();
	const { weekEnds } = checkDate();

	// Before any submissions have been marked but users are registered ie. week1
	if (new Date(Date.now()).getTime() < weekEnds.week1.getTime()) {
		return (
			<div className='section' id='leaderboard'>
				<Navbar />
				<Banner page='TOP 10 Leaderboard' />
				<div className='leaderboardContainer'>
					<h2>Check back next week for the updated leaderboard!</h2>
				</div>
			</div>
		);
	}

	if ((!fetching && !data) || data?.topScores?.length == 0) {
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
