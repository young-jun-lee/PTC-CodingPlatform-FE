import React, { useState, useEffect, InputHTMLAttributes } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPW from "./ForgotPW";

type PopupProps = {
	id: string;
	contentStringProps: string;
	trigger: boolean;
	setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Popup: React.FC<PopupProps> = ({
	id,
	contentStringProps,
	trigger,
	setTrigger,
}) => {
	const [contentString, setContentString] = useState("");
	const [content, setContent] = useState(<></>);

	const getContents = (componentName: string) => {
		if (componentName === "login") {
			setContent(<Login setContentString={setContentString} />);
			return;
		}
		if (componentName === "sign up") {
			setContent(<SignUp setContentString={setContentString} />);
			return;
		}
		if (componentName === "pw reset") {
			setContent(<ForgotPW />);
		}
	};

	useEffect(() => {
		if (contentString === "") {
			setContentString(contentStringProps);
		}
		getContents(contentString);
	}, [contentString]);

	const closeWindow = () => {
		setTrigger(false);
	};

	return trigger ? (
		<div className='popup' id={id}>
			<div className='popup-inner'>
				<button className='close-btn' onClick={() => closeWindow()}>
					&times;
				</button>
				{content}
			</div>
		</div>
	) : (
		<></>
	);
};
