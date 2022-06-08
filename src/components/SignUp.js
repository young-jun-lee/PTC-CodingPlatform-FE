import React, { useState } from "react";
import { useRegisterMutation } from "../../generated/graphql";

import data from "../content/loginsignup";



const SignUp = ({ setContentString }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [r, register] = useRegisterMutation();
	return (
		<div className='login-component'>
			<div className='login-body'>
				<img className='ptc-logo' src={data.ptcIcon.src}></img>

				<div className='login-text'>
					To continue, sign up for your <br /> PTC account.
				</div>

				<form
					className='login-form'
					onSubmit={async (values, { setErrors }) => {
						const response = await register({
							options: values,
						});
						if (response.data?.register.errors) {
							console.log(
								toErrorMap(response.data.register.errors)
							);
							setErrors(
								toErrorMap(response.data.register.errors)
							);
						} else if (response.data?.register.user) {
							// register worked, we get a user back
							router.push("/");
						}
					}}
				>
					<div className='login-name-input'>
						<input
							className='signup-text input-name'
							type='text'
							placeholder='First name'
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						></input>
						<input
							className='signup-text input-name'
							type='text'
							placeholder='Last name'
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						></input>
					</div>

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

					<input
						className='input-submit'
						type='submit'
						placeholder='Create Account'
					></input>
				</form>

				<div className='login-reset-sign-up'>
					<hr className='line'></hr>
					<div className='sign-up-line inline-child'>
						<div className='login-text'>
							Already have an account?
						</div>
						<a
							href='#'
							onClick={() => {
								setContentString("login");
							}}
							className='link-text bold login-text sign-up-login-text'
						>
							<b>Sign in here</b>
						</a>
						<div className='App'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
