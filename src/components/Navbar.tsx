import Link from "next/link";
import React, { useState } from "react";

import { isServer } from "../utils/isServer";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { Popup } from "./Popup";
import { Button, CloseButton } from "@chakra-ui/react";

export interface MenuProps {
	children: React.ReactNode;
}

const Navbar = () => {
	const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
	const [{ data, fetching }] = useMeQuery({
		pause: isServer(),
	});
	const numWeeks = 3;
	const Menu = (props: MenuProps) => {
		const [isOpen, setIsOpen] = React.useState(false);
		const [head, ...tail] = React.Children.toArray(props.children);

		return (
			<div
				className='menu'
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
			>
				{head}
				{isOpen && <div className='open'>{tail}</div>}
			</div>
		);
	};

	const menuInstance = (
		<Menu>
			<div className='nav'>Challenges</div>
			<Link href='/challenges/1'>
				<div className='item'>Week 1</div>
			</Link>
			<Link href='/challenges/2'>
				<div className='item'>Week 2</div>
			</Link>
			<Link href='/challenges/3'>
				<div className='item'>Week 3</div>
			</Link>
		</Menu>
	);

	const [buttonPopup, setButtonPopup] = useState(false);
	const [popupContent, setPopupContent] = useState("");

	const userText = () => {
		if (!data?.me) return "not logged in";
		if (data?.me.isAdmin) {
			return "admin";
		} else {
			return data?.me?.username.split(" ")[0];
		}
	};

	return (
		<div className='headerContainer'>
			<div className='title-section'>
				<a href='https://www.projecttechconferences.com'>
					<img
						className='codingLogo'
						src='/assets/static/logos.png'
						alt='PTC'
					></img>
				</a>
				<div className='title-text'>CODING CHALLENGE</div>
			</div>
			<ul className='header'>
				<li className='header-text'>
					<a href='/' className='nav'>
						Home
					</a>
				</li>

				<li className='header-text'>
					{/* <a href="challenges" className="nav"> */}
					<div className='nav-dropdown'>{menuInstance}</div>

					{/* </a> */}
				</li>

				<li className='header-text'>
					<a href='/rules' className='nav'>
						Rules
					</a>
				</li>

				<li className='header-text'>
					<a href='/leaderboard' className='nav'>
						Leaderboard
					</a>
				</li>

				{
					//if you are a loggedin user/not admin - see Pleaderboard
					data?.me && !data?.me.isAdmin && (
						<>
							<li className='header-text'>
								<a
									href={`personal-leaderboard/${userText()}`}
									className='nav'
								>
									Personal Leaderboard
								</a>
							</li>
						</>
					)
				}

				{
					//if you are not logged in - see login button
					!data?.me && (
						<>
							<li className='header-text'>
								<a
									href='#'
									onClick={() => {
										setButtonPopup(true);
										setPopupContent("login");
									}}
									className='nav'
								>
									Login
								</a>
								{buttonPopup && (
									<>
										<div className='App'>
											<Popup
												id={popupContent}
												componentNameProps={
													popupContent
												}
												trigger={buttonPopup}
												setTrigger={setButtonPopup}
											/>
										</div>
									</>
								)}
							</li>
							<li className='header-text'>
								<a
									href='#'
									onClick={() => {
										setButtonPopup(true);
										setPopupContent("sign up");
									}}
									className='nav'
								>
									Sign up
								</a>
							</li>
						</>
					)
				}
				{
					//if you are logged in - see user name + log out
					data?.me && (
						<>
							<li className='header-text'>
								<i className='nav'>{`Hello, ${userText()}`}</i>
							</li>
							<li className='header-text'>
								<Button
									isLoading={logoutFetching}
									onClick={() => {
										logout();
										setButtonPopup(false);
									}}
									w='100%'
									bg='white'
								>
									<a href='#' className='nav'>
										Logout
									</a>
								</Button>
							</li>
						</>
					)
				}
			</ul>
		</div>
	);
};

export default Navbar;
