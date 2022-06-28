import React, { FC } from 'react';
import { WeekProps } from '../../common/Interfaces';
import Tabs from './Tabs';

const ChallengesBody: FC<WeekProps> = ({ week }) => {
  const authWeek = () => {
    let releaseWeek;

    const today = new Date(Date.now());

    const week1Start = new Date(Date.UTC(2021, 6, 5, 4, 0, 0));
    const week2Start = new Date(Date.UTC(2023, 6, 12, 4, 0, 0));
    const week3Start = new Date(Date.UTC(2021, 6, 19, 4, 0, 0));
    const week4Start = new Date(Date.UTC(2021, 6, 26, 4, 0, 0));
    if (today.getTime() > week4Start.getTime()) {
      console.log('challenges: week 4 started');
      releaseWeek = 4;
    } else if (today.getTime() > week3Start.getTime()) {
      console.log('challenges: week 3 started');
      releaseWeek = 3;
    } else if (today.getTime() > week2Start.getTime()) {
      console.log('challenges: week 2 started');
      releaseWeek = 2;
    } else if (today.getTime() > week1Start.getTime()) {
      console.log('challenges: week 1 started');
      releaseWeek = 1;
    } else {
      console.log('challenges: comp not started yet');
      releaseWeek = 0;
    }
    return true;
    // return week <= releaseWeek ? true : false;
  };

  const viewWeek = authWeek();

  return (
    <div className="section" id="home">
      {viewWeek && (
        <div className="challenges-container">
          <Tabs week={week} />
        </div>
      )}
      {!viewWeek && (
        <div>{`You are not authorized to see week ${week} yet.`}</div>
      )}
    </div>
  );
};

export default ChallengesBody;
