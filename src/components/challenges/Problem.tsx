import React, { FC, useEffect, useState } from 'react';
// import axios from "axios";
import Part from './Part';
// import style from "../../styles/Problem.css";
import { ProblemProps } from '../../common/Interfaces';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import Week1Content from '../../content/questions/week1';
import Week2Content from '../../content/questions/Week2';
import Week3Content from '../../content/questions/Week3';
import Week4Content from '../../content/questions/Week4';

const Problem: FC<ProblemProps> = ({ questionNum, week }) => {
  const questionKey = questionNum - 1;

  const getContent = () => {
    if (week === 4) {
      return Week4Content;
    } else if (week === 3) {
      return Week3Content;
    } else if (week === 2) {
      return Week2Content;
    } else if (week === 1) {
      return Week1Content;
    }
    return Week1Content;
  };

  const content = getContent();

  return (
    <div className="section" id="home">
      <div className="problem-container">
        <div className="problem-title" key={questionKey}>
          {`PROBLEM ${questionNum} : ${content.Problems[questionKey].Title}`}
        </div>

        <div className="paragraph-container">
          <div className="paragraph-text">
            {content.Problems[questionKey].Paragraph}
          </div>
        </div>

        <div className="question-parts">
          {content.Problems[questionKey].Parts.map((problemKeys, index) => (
            <Part
              problemKeys={problemKeys}
              questionNum={questionNum}
              week={week}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Problem);
