import React, { useState } from "react";
import data from "../content/loginsignup";
import { useForgotPasswordMutation } from "../generated/graphql";

const ForgotPW: React.FC<{}> = ({}) => {
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [messageSent, setMessageSent] = useState(false);
	const [complete, setComplete] = useState(false);
	const [, forgotPassword] = useForgotPasswordMutation();

	return (
		<div className='login-component'>
			<div className='login-body'>
				<img className='ptc-logo' src={data.ptcIcon.src} alt='#'></img>
				<div className='forgot-your-password'>
					Forgot Your Password?
				</div>
				<div className='forgot-pw-text'>
					Enter your email address and we'll send you instructions to
					reset your password
				</div>

				<form
					className='login-form'
					onSubmit={async (values) => {
						await forgotPassword({ email: values.email });
						setComplete(true);
					}}
				>
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
						placeholder='Create'
						style={messageSent ? { display: "none" } : {}}
						disabled={messageSent}
					></input>
				</form>
			</div>
		</div>
	);
};

export default ForgotPW;
