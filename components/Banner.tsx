import React, { FC } from "react";

interface Page {
	page: string;
}

const Banner: FC<Page> = (props) => {
	return (
		<div className='section' id='home'>
			<div className='banner'>
				<div className='banner-text'>{props.page}</div>
			</div>
		</div>
	);
};

export default Banner;
