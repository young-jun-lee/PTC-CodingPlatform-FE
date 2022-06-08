import React from 'react';

import Text from '../content/rules';

import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Rules = () => {
  return (
    <div className="section" id="home">
      <Navbar />
      <Banner page="Rules" />
      <div className="container">
        <div className="box box1">
          <h2 className="title title1">{Text.title1}</h2>
          <div className="text">{Text.text1}</div>
        </div>

        <div className="box box2">
          <h2 className="title title2">{Text.title2}</h2>
          <ol>
            <li className="text">{Text.text2_1}</li>
            <li className="text">
              You must be following PTC (
              <a
                className="ig-link"
                href="https://www.instagram.com/projecttechconferences/"
              >
                @projecttechconferences
              </a>
              ) on Instagram
            </li>
            <li className="text">{Text.text2_3}</li>
          </ol>
        </div>

        <div className="box box3">
          <h2 className="title title3">{Text.title3}</h2>
          <ol>
            <li className="text">{Text.text3_1}</li>
            <li className="text">{Text.text3_2}</li>
            <li className="text">{Text.text3_3}</li>
            <li className="text">{Text.text3_4}</li>
            <li className="text">{Text.text3_5}</li>
          </ol>
        </div>

        <div className="box box4">
          <h2 className="title title4">{Text.title4}</h2>
          <div className="text">{Text.text4_1}</div>
          <ol>
            <li className="text">{Text.text4_2}</li>
            <ol>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_3}
              </li>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_4}
              </li>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_5}
              </li>
              <ol>
                <li className="text" style={{ listStyleType: 'lower-roman' }}>
                  {Text.text4_6}
                </li>
              </ol>
              <br></br>
            </ol>

            <li className="text">{Text.text4_7}</li>
            <ol>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_8}
              </li>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_9}
              </li>
              <ol>
                <li className="text" style={{ listStyleType: 'lower-roman' }}>
                  {Text.text4_10}
                </li>
              </ol>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_11}
              </li>
            </ol>
            <br></br>

            <li className="text">{Text.text4_12}</li>
            <ol>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_13}
              </li>
              <li className="text" style={{ listStyleType: 'lower-alpha' }}>
                {Text.text4_14}
              </li>
            </ol>
            <br></br>
            {/* 
            <li className="text">{Text.text4_15}</li>
            <ol>
              <li className="text" style={{ listStyleType: "lower-alpha" }}>
                {Text.text4_16}
              </li>
            </ol>
            <br></br> */}

            <li className="text">{Text.text4_17}</li>
            <br></br>
            <li className="text">{Text.text4_18}</li>
          </ol>
        </div>

        <div className="box box5">
          <h2 className="title title5">{Text.title5}</h2>
          <ol>
            <li className="text">{Text.text5_1}</li>
            <li className="text">{Text.text5_2}</li>
            <li className="text">{Text.text5_3}</li>
          </ol>
        </div>

        <div className="box box6">
          <div className="title title6">In case of technical issues...</div>
          <div className="text technical-issues">
            If you experience technical issues with the website that prevent you
            from submitting before the weekly deadline, please email your issue
            and all unsuccessful submissions to{' '}
            <u>coding.challenge@projecttechconferences.com</u> in a{' '}
            <b>single email</b>.
          </div>
          <div className="text technical-issues margin-up">
            Submissions through this method will only be accepted if:{' '}
          </div>
          <ul className="technical-issues">
            <li className="text">
              The email is sent <b>less than 2 hours</b> before the deadline
              (i.e. Sunday between 9:59 PM and 11:59 PM).
            </li>
            <li className="text">
              {`The subject line of the email follows the format `}
              <b>{`"Week <week_number> Submission: <first_name> <last_name>" `}</b>
              {`(e.x. "Week 1 Submission: John Smith").`}
            </li>
            <li className="text">
              {`Each python file is named according to the format `}
              <b>{`"W<week_number>_P<problem_number><part_letter>.py" `}</b>
              {`(ex. For week 1, problem 1, part a, the file name should be W1_P1a.py).`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
