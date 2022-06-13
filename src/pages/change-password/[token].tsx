import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Text from "../../content/landing";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import data from "../../content/footer";
import { useChangePasswordMutation } from "../../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";
import NextLink from "next/link";

import Footer from "../../components/Footer";

const ChangePassword: NextPage<{ token: string }> = () => {
	const router = useRouter();
	const [, changePassword] = useChangePasswordMutation();
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	return (
		<>
			<Navbar></Navbar>
			<Banner page='Reset Password'></Banner>
			<div className='login-component'>
				<div className='login-body'>
					<img
						className='ptc-logo'
						src={data.ptcIcon.src}
						alt='#'
					></img>

					<div className='login-text'>
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
							<Form className='login-form'>
								<input
									className='signup-text'
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
			<Footer></Footer>
		</>
	);
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
