import React, { useState, useEffect, InputHTMLAttributes } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPW from "./ForgotPW";
import { CloseButton } from "@chakra-ui/react";

type PopupProps = {
	id: string;
	componentNameProps: string;
	// login/register/forgotpw
	trigger: boolean;
	setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Popup: React.FC<PopupProps> = ({
	id,
	componentNameProps,
	trigger,
	setTrigger,
}) => {
	const [componentName, setComponentName] = useState("");
	const [component, setComponent] = useState(<></>);

	const getContents = (componentName: string) => {
		if (componentName === "login") {
			setComponent(<Login setComponentName={setComponentName} />);
			return;
		}
		if (componentName === "sign up") {
			setComponent(<SignUp setComponentName={setComponentName} />);
			return;
		}
		if (componentName === "pw reset") {
			setComponent(<ForgotPW />);
		}
	};

	useEffect(() => {
		if (componentName === "") {
			setComponentName(componentNameProps);
		}
		getContents(componentName);
	}, [componentName]);

	const closeWindow = () => {
		setTrigger(false);
	};

	return trigger ? (
		<div className='popup' id={id}>
			<div className='popup-inner'>
				{/* <button className='close-btn' onClick={() => closeWindow()}> */}
				<CloseButton
					className='close-btn'
					onClick={() => closeWindow()}
				/>
				{/* </button> */}
				{component}
			</div>
		</div>
	) : (
		<></>
	);
};
