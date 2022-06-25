import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useState } from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import data from "../../content/footer";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const ChangePassword: NextPage<{ token: string }> = () => {
	const router = useRouter();
	const [, changePassword] = useChangePasswordMutation();
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	return (
		<>
			<Navbar></Navbar>
			<Banner page='Reset Password'></Banner>
			<div className='resetPW-component'>
				<div className='reset-body'>
					<img
						className='ptc-logo'
						src={data.ptcIcon.src}
						alt='#'
					></img>

					<div className='reset-text'>
						Enter your new password below
					</div>
					<Formik
						initialValues={{ newPassword: "" }}
						onSubmit={async () => {
							const response = await changePassword({
								newPassword: password,
								// get the token from the query parameter (in the page url)
								// else set it to an empty string so it throws an error
								token:
									typeof router.query.token === "string"
										? router.query.token
										: "",
							});
							if (response.data?.changePassword.errors) {
								setErrorMessage(
									response.data?.changePassword.errors[0]
										.message
								);
							} else if (response.data?.changePassword.user) {
								router.push("/");
							}
						}}
					>
						{({ isSubmitting }) => (
							<Form className='reset-form'>
								<input
									className='reset-text'
									type='password'
									placeholder='Password'
									onChange={(e) =>
										setPassword(e.target.value)
									}
									value={password}
								/>
								<div className='message-to-user error-message'>
									{errorMessage}
								</div>
								{/* <div className='message-to-user success-message'>
							{successMessage}
						</div>  */}
								<Button
									isLoading={isSubmitting}
									w='100%'
									bg='white'
								>
									<input
										className='input-submit'
										type='submit'
										value='Change Password'
									></input>
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
