import Link from "next/link";
import React, { useState } from "react";
import codingLogos from "../public/assets/static/logos.png";
import { isServer } from "../utils/isServer";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import Popup from "./Popup";

export interface MenuProps {
	children: React.ReactNode;
}

const Navbar = () => {
	const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
	const [{ data, fetching }] = useMeQuery({
		pause: isServer(),
	});
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
			{/* <Item onClick={() => alert("Link one clicked!")}>Challenges</Item> */}
			<Link href='/challenges'>
				<div className='item'>Week 1</div>
			</Link>
			<Link href='/challenges'>
				<div className='item'>Week 2</div>
			</Link>
			<Link href='/challenges'>
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
						src={codingLogos.src}
						alt=''
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
					<a href='rules' className='nav'>
						Rules
					</a>
				</li>

				<li className='header-text'>
					<a href='leaderboard' className='nav'>
						Leaderboard
					</a>
				</li>

				{
					//if you are a logged in user/not admin - see Pleaderboard
					data?.me && !data?.me.isAdmin && (
						<>
							<li className='header-text'>
								<a href='/pleaderboard' className='nav'>
									Personal Leaderboard
								</a>
							</li>
						</>
					)
				}

				{
					//if you are not logged in - see login button
					!data?.me && (
						// !status.loggedIn?.loggedIn && (
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
												contentStringProps={
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
				{/* 
				{
					//if you are logged in - see user name + log out
					status.?.loggedIn (
						<>
							<li className='header-text'>
								<i href='' className='nav'>
									{`Hello, ${userText()}`}
								</i>
							</li>
							<li
								className='header-text'
								// onClick={(e) => logOut(e)}
								onClick={()=> logout()}
							>
								<a href='#' className='nav'>
									Logout
								</a>
							</li>
						</>
					)
				} */}
			</ul>
		</div>
	);
};

export default Navbar;
