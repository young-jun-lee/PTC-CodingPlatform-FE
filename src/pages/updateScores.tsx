import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import {
	useUpdatePointsMutation,
	useUpdateTotalPointsMutation,
	useUserPointsQuery,
} from "../generated/graphql";

const updatescores = () => {
	const [, updatepoints] = useUpdatePointsMutation();
	const [, updateTotal] = useUpdateTotalPointsMutation();
	const [updateMessage, setUpdateMessage] = useState("");
	const [updateTotalMessage, setUpdateTotalMessage] = useState("");
	const [counter, setCounter] = useState(0);
	const handleSubmit = async (event: any) => {
		event.preventDefault();

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
			if (res.error?.graphQLErrors)
				throw new Error(res.error?.graphQLErrors[0].message as string);
			else setUpdateMessage(res.data?.updatePoints.message as string);
		} catch (err) {
			if (err instanceof Error) {
				setUpdateMessage(err.message);
			}
		}
		try {
			const res = await updateTotal();
			if (res.error?.graphQLErrors)
				throw new Error(res.error?.graphQLErrors[0].message as string);
			else
				setUpdateTotalMessage(
					res.data?.updateTotalPoints.message as string
				);
		} catch (err) {
			if (err instanceof Error) {
				setUpdateTotalMessage(err.message);
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
			<div>{updateMessage}</div>
			<div>{updateTotalMessage}</div>
		</div>
	);
};

export default withUrqlClient(createUrqlClient)(updatescores);
