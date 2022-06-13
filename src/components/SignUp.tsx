import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import data from "../content/loginsignup";
import { useRegisterMutation } from "../generated/graphql";

type SignUpProps = {
	setComponentName: React.Dispatch<React.SetStateAction<string>>;
};

const SignUp: React.FC<SignUpProps> = ({ setComponentName }) => {
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [_, register] = useRegisterMutation();

	return (
		<div className='login-component'>
			<div className='login-body'>
				<img className='ptc-logo' src={data.ptcIcon.src}></img>
				<div className='login-text'>Sign up for a PTC account.</div>
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						username: "",
						password: "",
						email: "",
					}}
					onSubmit={async () => {
						console.log("here");
						const response = await register({
							options: {
								username,
								firstName,
								lastName,
								password,
								email,
							},
						});
						if (response.data?.register.errors) {
							setErrorMessage(
								response.data?.register.errors[0].message
							);
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<div className='login-name-input'>
								<input
									className='signup-text input-name'
									type='text'
									placeholder='First name'
									onChange={(e) =>
										setFirstName(e.target.value)
									}
									value={firstName}
								></input>
								<input
									className='signup-text input-name'
									type='text'
									placeholder='Last name'
									onChange={(e) =>
										setLastName(e.target.value)
									}
									value={lastName}
								></input>
							</div>
							<input
								className='signup-text'
								type='text'
								placeholder='Username'
								onChange={(e) => setUsername(e.target.value)}
								value={username}
							></input>
							<input
								className='signup-text'
								type='text'
								placeholder='Email address'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							></input>
							<input
								className='signup-text'
								type='password'
								placeholder='Password'
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							></input>
							<div className='error-message message-to-user'>
								{errorMessage}
							</div>
							<Button
								isLoading={isSubmitting}
								w='100%'
								bg='white'
							>
								<input
									className='input-submit-signup'
									type='submit'
									value='Create Account'
								></input>
							</Button>
						</Form>
					)}
				</Formik>
				<div className='login-reset-sign-up'>
					<hr className='line'></hr>
					<div className='sign-up-line inline-child'>
						<div className='login-text'>
							Already have an account?
						</div>
						<a
							href='#'
							onClick={() => {
								setComponentName("login");
							}}
							className='link-text bold login-text sign-up-login-text'
						>
							<b>Sign in here</b>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
