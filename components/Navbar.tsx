import Link from "next/link";
import React, { useState } from "react";
import data from "../content/loginsignup";
import Image from "next/image";

export interface MenuProps {
	children: React.ReactNode;
}

function Navbar() {
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
	const [popupContent, setPopupContent] = useState();

	return (
		<div className='headerContainer'>
			<div className='title-section'>
				<a href='https://www.projecttechconferences.com'>
					<img
						className='codingLogo'
						src={`/assets/static/logos.png`}
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
			</ul>
		</div>
	);
}

export default Navbar;
