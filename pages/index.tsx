import type { NextPage } from "next";
import Banner from "../components/Banner";
import Text from "../content/landing";

const Landing: NextPage = () => {
	return (
		<div className='section'>
			<Banner page='Welcome'></Banner>
			<div className='container'>
				<div className='landingContainer'>
					<div className='aboutPTC landing-box'>
						<div className='aboutTitle'>
							<h2 className='landingTitle'>About PTC</h2>
						</div>
					</div>

					<div className='codingChallenge landing-box'>
						<div className='whatTitle'>
							<h2 className='landingTitle'>
								What is PTC × Angstrom's Coding Challenge?
							</h2>
						</div>
						<p className='welcomeContent'>{Text.whatParaOne}</p>
					</div>

					<div className='learningGrowth landing-box'>
						<div className='learningTitle'>
							<h2 className='landingTitle'>
								Learning and Growth
							</h2>
						</div>
						<p className='welcomeContent'>{Text.learningParaOne}</p>
						<ul>
							<li>{Text.learningParaTwo}</li>
							<li>{Text.learningParaThree}</li>
						</ul>
					</div>

					<div className='getStarted landing-box'>
						<div className='getStartedTitle'>
							<h2 className='landingTitle'>Get Started!</h2>
						</div>
						<p className='welcomeContent'>{Text.learningParaOne}</p>
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

					<div className='ptcMedia landing-box'>
						<div className='ptcMediaTitle'>
							<h2 className='landingTitle'>Sponsors</h2>
							<p className='welcomeContent'>
								A big thank you to our wonderful sponsors who
								made this event possible!
							</p>
							<img
								src={`${process.env.PUBLIC_URL}/assets/static/angstromretinalogor.png`}
								alt='#'
								className='sponsImages angstrom'
							/>
							<img
								src={`${process.env.PUBLIC_URL}/assets/static/WaterlooIT Logo.png`}
								alt='#'
								className='sponsImages'
							/>
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

export default Landing;
