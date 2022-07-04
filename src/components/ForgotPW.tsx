import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import data from "../content/loginsignup";
import { useForgotPasswordMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const ForgotPW: React.FC<{}> = () => {
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [messageSent, setMessageSent] = useState(false);
	const [, forgotPassword] = useForgotPasswordMutation();

	return (
		<div className='login-component'>
			<img className='ptc-logo' src={data.ptcIcon.src} alt='#'></img>
			<div className='forgot-your-password'>Forgot Your Password?</div>
			<div className='forgot-pw-text'>
				Enter your email address and we'll send you instructions to
				reset your password
			</div>

			<Formik
				initialValues={{ email: "" }}
				onSubmit={async () => {
					const response = await forgotPassword({
						email,
					});
					if (response.data?.forgotPassword.errors) {
						setErrorMessage(
							response.data?.forgotPassword.errors[0].message
						);
					} else if (response.data?.forgotPassword.success) {
						setSuccessMessage(
							response.data?.forgotPassword.success[0].message
						);
						setMessageSent(true);
					}
				}}
			>
				{({ isSubmitting }) =>
					messageSent ? (
						<div
							className='message-to-user success-message'
							style={{ marginTop: "8em" }}
						>
							{successMessage}
						</div>
					) : (
						<Form>
							<input
								className='input-text forgot-pw-input-email'
								type='text'
								placeholder='Email address'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							></input>
							<div className='message-to-user error-message'>
								{errorMessage}
							</div>

							<Button
								isLoading={isSubmitting}
								w='100%'
								bg='white'
							>
								<input
									className='input-submit'
									type='submit'
									value='Reset Password'
								></input>
							</Button>
						</Form>
					)
				}
			</Formik>

			{/* <form className='login-form' onSubmit={submitForm}>
					<input
						className='input-text forgot-pw-input-email'
						type='text'
						placeholder='Email address'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					></input>
					<div
						className='message-to-user error-message'
						style={messageSent ? { display: "none" } : {}}
					>
						{errorMessage}
					</div>
					<div className='message-to-user success-message'>
						{successMessage}
					</div>

					<input
						className='input-submit'
						type='submit'
						style={messageSent ? { display: "none" } : {}}
						disabled={messageSent}
					></input>
				</form> */}
		</div>
	);
};

export default ForgotPW;
