import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useState } from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import { useUserPointsQuery } from "../../generated/graphql";

const PLeaderboard = () => {
	const [{ data, fetching }] = useUserPointsQuery();

	return (
		<div className='section' id='leaderboard'>
			<Navbar />
			<Banner page='Personal Leaderboard' />
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
						{console.log(data?.userPoints)}
						{data!.userPoints?.map((post, index) => (
							<tr key={index}>
								<td>{post.question[0]}</td>
								<td>{`Question ${post.question[1]} - Part ${post.question[2]}`}</td>
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

export default withUrqlClient(createUrqlClient)(PLeaderboard);
