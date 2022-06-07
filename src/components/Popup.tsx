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

// function Popup({ id, contentStringProps, trigger, setTrigger }: PopupProps) {
// 	const [contentString, setContentString] = useState("");
// 	const [content, setContent] = useState(<></>);

// 	const getContents = (componentName: string) => {
// 		if (componentName === "login") {
// 			setContent(<Login setContent={setContent} />);
// 			return;
// 		}
// 		if (componentName === "sign up") {
// 			setContent(<SignUp setContent={setContent} />);
// 			return;
// 		}
// 		if (componentName === "pw reset") {
// 			setContent(<ForgotPW />);
// 		}
// 	};

// 	useEffect(() => {
// 		setContentString(contentStringProps);
// 		getContents(contentString);
// 	});

// 	// useEffect(() => {
// 	// 	if (!contentString) {
// 	// 		setContentString(contentStringProps);
// 	// 		const tempContentString = contentString;
// 	// 		getContents(tempContentString);
// 	// 	} else {
// 	// 		getContents(content);
// 	// 	}
// 	// }, [content]);

// 	const closeWindow = () => {
// 		setTrigger(false);
// 	};

// 	return trigger ? (
// 		<div className='popup' id={id}>
// 			<div className='popup-inner'>
// 				<button className='close-btn' onClick={() => closeWindow()}>
// 					&times;
// 				</button>
// 				{content}
// 			</div>
// 		</div>
// 	) : (
// 		<></>
// 	);
// }
// export default Popup;
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

	// useEffect(() => {
	// 	if (!contentString) {
	// 		setContentString(contentStringProps);
	// 		const tempContentString = contentString;
	// 		getContents(tempContentString);
	// 	} else {
	// 		getContents(contentString);
	// 	}
	// }, [content]);

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
