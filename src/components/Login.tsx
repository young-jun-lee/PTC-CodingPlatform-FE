import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import data from "../content/loginsignup";
import { useLoginMutation } from "../generated/graphql";

type LoginProps = {
	setComponentName: React.Dispatch<React.SetStateAction<string>>;
};

const Login: React.FC<LoginProps> = ({ setComponentName }) => {
	const [emailOrUsername, setEmailOrUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [_, login] = useLoginMutation();
	return (
		<div className='login-component'>
			<img className='ptc-logo' src={data.ptcIcon.src}></img>

			<div className='login-text login-text-instructions'>
				To continue, log in to your <br /> PTC account.
			</div>
			<Formik
				initialValues={{ usernameOrEmail: "", password: "" }}
				onSubmit={async () => {
					const response = await login({
						usernameOrEmail: emailOrUsername,
						password: password,
					});
					if (response.data?.login.errors) {
						setErrorMessage(response.data?.login.errors[0].message);
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form className='login-form'>
						<input
							className='input-text'
							type='text'
							placeholder='Email or Username'
							onChange={(e) => setEmailOrUsername(e.target.value)}
							value={emailOrUsername}
						></input>
						<input
							className='input-text'
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						></input>
						<div className='error-message message-to-user'>
							{errorMessage}
						</div>
						<Button isLoading={isSubmitting} w='100%' bg='white'>
							<input
								className='input-submit'
								type='submit'
								value='Sign In'
							></input>
						</Button>
					</Form>
				)}
			</Formik>
			<div className='login-reset-sign-up'>
				<a
					href='#'
					onClick={() => {
						setComponentName("pw reset");
					}}
					className='link-text login-text forgot'
				>
					Forgot your password?
				</a>

				<hr className='line'></hr>

				<div className='sign-up-line inline-child'>
					<div className='login-text'>Don't have an account yet?</div>
					<a
						href='#'
						onClick={() => {
							setComponentName("sign up");
						}}
						className='link-text bold login-text sign-up-login-text'
					>
						<b>Sign up now</b>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Login;

// const Login = ({ setContentString }) => {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [errorMessage, setErrorMessage] = useState("");
// 	const [l, login] = useLoginMutation();

// 	return (
// 		<div className='login-component'>
// 			<div className='login-body'>
// 				<img className='ptc-logo' src={data.ptcIcon.src}></img>

// 				<div className='login-text login-text-instructions'>
// 					To continue, log in to your <br /> PTC account.
// 				</div>

// 				<form
// 					className='login-form'
// 					onSubmit={async (values, { setErrors }) => {
// 						const response = await login({
// 							usernameOrEmail: values.usernameoOrEmail,
// 							password: values.password,
// 						});
// 						if (response.data?.login.errors) {
// 							setErrors(toErrorMap(response.data.login.errors));
// 						} else if (response.data?.login.user) {
// 							// if we have the query parameter defined for what page it should redirect to
// 							if (typeof router.query.next === "string") {
// 								router.push(router.query.next);
// 							} else {
// 								router.push("/");
// 							}
// 						}
// 					}}
// 				>
// 					<input
// 						className='input-text'
// 						type='text'
// 						placeholder='Email address'
// 						onChange={(e) => setEmail(e.target.value)}
// 						value={email}
// 					></input>
// 					<input
// 						className='input-text'
// 						type='password'
// 						placeholder='Password'
// 						onChange={(e) => setPassword(e.target.value)}
// 						value={password}
// 					></input>
// 					<div className='error-message message-to-user'>
// 						{errorMessage}
// 					</div>
// 					<input
// 						className='input-submit'
// 						type='submit'
// 						value='Sign in'
// 					></input>
// 				</form>

// 				<div className='login-reset-sign-up'>
// 					<a
// 						href='#'
// 						onClick={() => {
// 							setContentString("pw reset");
// 						}}
// 						className='link-text login-text forgot'
// 					>
// 						Forgot your password?
// 					</a>

// 					<hr className='line'></hr>

// 					<div className='sign-up-line inline-child'>
// 						<div className='login-text'>
// 							Don't have an account yet?
// 						</div>
// 						<a
// 							href='#'
// 							onClick={() => {
// 								setContentString("sign up");
// 							}}
// 							className='link-text bold login-text sign-up-login-text'
// 						>
// 							<b>Sign up now</b>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;
