import React from 'react';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import ChallengesBody from './Challenges/ChallengesBody';
import Footer from '../../components/Footer';

const Challenges = ({ match }) => {
  const themes = {
    1: 'Basics',
    2: 'Math',
    3: 'Dynamic Programming',
    4: 'Combo'
  };

  return (
    <div className="section" id="home">
      <Header />
      <Banner
        page={`Week ${match.params.week} : ${themes[match.params.week]}`}
      />
      <ChallengesBody week={match.params.week} />
      <Footer />
    </div>
  );
};

export default Challenges;
