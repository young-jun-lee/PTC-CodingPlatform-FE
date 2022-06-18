import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useUserPointsQuery } from "../generated/graphql";
// import Style from "../styles/Leaderboard.css";
// import { formatMongoData } from "../content/PLeaderboardFunction/pLeaderboardFunctions";

const Leaderboard = () => {
	const [pLeaderboardInfo, setPLeaderboardInfo] = useState();
	const [pLeaderboardInfoSub, setPLeaderboardInfoSub] = useState([]);
	const [variables, setVariables] = useState({
		username: "test1",
	});
	const [{ data, fetching }] = useUserPointsQuery({ variables });
	const router = useRouter();

	if (!fetching && !data) {
		return <div>Query returned no results.</div>;
	}
	return (
		<div className='section' id='leaderboard'>
			<Navbar />
			<Banner page='Leaderboard' />
			{!data?.userPoints && fetching ? (
				<p>data is loading...</p>
			) : (
				<table>
					<thead>
						<tr className='table-headers'>
							<th className='titleHeader'>Week</th>
							<th className='titleHeader'>Question</th>
							<th className='titleHeader'>Points</th>
						</tr>
					</thead>
					<tbody>
						{/* {console.log(data?.userPoints)} */}
						{data!.userPoints?.map((post, index) => (
							<tr key={index}>
								<td>{post.week}</td>
								<td>{`Question ${post.question} - Part ${post.part}`}</td>
								{post.points ? (
									<td>{post.points}</td>
								) : (
									<td>0</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default withUrqlClient(createUrqlClient)(Leaderboard);
