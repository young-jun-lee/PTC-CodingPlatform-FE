import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import {
	useUpdatePointsMutation,
	useUserPointsQuery,
} from "../generated/graphql";

const updatescores = () => {
	const [, updatepoints] = useUpdatePointsMutation();
	const [updateMessage, setUpdateMessage] = useState("");
	const [counter, setCounter] = useState(0);
	const [data, setData] = useState("");
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setData(event.target);
		const rows = [];
		console.log(event.target[0].value);
		for (let i = 0; i <= counter * 2 - 1; i += 2) {
			console.log(i + ":", event.target[i].value);
			rows.push({
				fileKey: event.target[i].value,
				points: parseInt(event.target[i + 1].value),
			});
		}
		try {
			const res = await updatepoints({ rows });
			console.log(res);
			setUpdateMessage(res.data?.updatePoints.message as string);
		} catch (err) {
			console.log(typeof err);
			// console.log(err.error)
			// setUpdateMessage(err);
			if (err instanceof Error) {
				console.log(err.message);
				console.log(err.name);

				// console.log(err?.error);
				// console.log(err?.error.graphQLErrors);
				// console.log(err.graphQLErrors);
				// setUpdateMessage(err.graphQLErrors);
			}
		}
	};

	const handleInputNums = (event: any) => {
		event.preventDefault();
		console.log(event.target[0].valueAsNumber);
		setCounter(event.target[0].valueAsNumber);
	};

	return (
		<div className='section' id='leaderboard'>
			<Navbar />
			<Banner page='Admin Access Only' />
			<form onSubmit={handleInputNums}>
				<label>
					Number of inputs
					<input type='number' name='name' />
				</label>
				<input type='submit'></input>
			</form>
			<form onSubmit={handleSubmit}>
				{Array(counter)
					.fill(1)
					.map((el, i) => (
						<div key={i}>
							fileKey
							<input type='text' />
							Points
							<input type='number' />
						</div>
					))}
				<input type='submit' name='update scores'></input>
			</form>
			{updateMessage}
		</div>
	);
};

export default withUrqlClient(createUrqlClient)(updatescores);
