import type { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Text from "../content/landing";
import { createUrqlClient } from "../utils/createUrqlClient";

const Landing: NextPage = () => {
	return (
		<div className='section'>
			<Navbar />
			<Banner page='Welcome'>Welcome</Banner>
			<div className='container'>
				<div className='landingContainer'>
					<div className='aboutPTC landing-box'>
						<div className='aboutTitle'>
							<h2 className='landingTitle'>About PTC</h2>
							<div className='welcomeContentContainer'>
								<p className='welcomeContent'>
									{Text.aboutParaOne}
								</p>
								<p className='welcomeContent'>
									{Text.aboutParaTwo}
								</p>
							</div>
						</div>
					</div>

					<div className='codingChallenge landing-box'>
						<div className='whatTitle'>
							<h2 className='landingTitle'>
								PTC’s Coding Challenge?
							</h2>
						</div>
						<div className='welcomeContentContainer'>
							<p className='welcomeContent'>{Text.whatParaOne}</p>
						</div>
					</div>

					<div className='learningGrowth landing-box'>
						<div className='learningTitle'>
							<h2 className='landingTitle'>
								Learning and Growth
							</h2>
						</div>
						<div className='welcomeContentContainer'>
							<p className='welcomeContent'>
								{Text.learningParaOne}
							</p>
							<ul>
								<li>{Text.learningParaTwo}</li>
								<li>{Text.learningParaThree}</li>
							</ul>
						</div>
					</div>

					<div className='getStarted landing-box'>
						<div className='getStartedTitle'>
							<h2 className='landingTitle'>Get Started!</h2>
						</div>
						<div className='welcomeContentContainer'>
							<p className='welcomeContent'>
								{Text.learningParaOne}
							</p>
							<ol>
								<li>
									{Text.getStartedParaTwo}
									<a href='rules'>Rules</a>
								</li>
								<li>
									{Text.getStartedParaThree}
									<a href='challenges/1'>Challenges</a>
								</li>
								<li>{Text.getStartedParaFour}</li>
							</ol>
						</div>
					</div>
					<div className='landing-goodluck landing-box'>
						Good Luck!
					</div>
				</div>
			</div>
		</div>
	);
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Landing);
