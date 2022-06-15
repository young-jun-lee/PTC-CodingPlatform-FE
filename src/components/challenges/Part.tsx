import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "../Context";
import ScrollableMenu from "./ScrollableMenu";

import { useAWSUpload, useAWSDelete } from "../../utilities";

const Part = (props) => {
  const [file, setFile] = useState();
  const [submitMessage, setSubmitMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const { handleUpload, progress } = useAWSUpload();

  const status = useContext(AuthContext);
  const week = props.week;

  function getData(spec) {
    if (Array.isArray(spec)) {
      return spec.map((sample) => <div>{sample}</div>);
    }
    return <div>{spec}</div>;
  }

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  function deadlineCutoff() {
    const today = new Date(Date.now());
    const week1End = new Date(Date.UTC(2021, 6, 12, 4, 0, 0));
    const week2End = new Date(Date.UTC(2021, 6, 19, 4, 0, 0));
    const week3End = new Date(Date.UTC(2021, 6, 26, 4, 0, 0));
    const week4End = new Date(Date.UTC(2021, 7, 2, 4, 0, 0));

    if (props.week === "4" && today.getTime() > week4End.getTime()) {
      return false;
    } else if (props.week === "3" && today.getTime() > week3End.getTime()) {
      return false;
    } else if (props.week === "2" && today.getTime() > week2End.getTime()) {
      return false;
    } else if (props.week === "1" && today.getTime() > week1End.getTime()) {
      return false;
    } else {
      return true;
    }
  }

  const onSubmit = async (e, part) => {
    e.preventDefault();
    try {
      if (!deadlineCutoff()) {
        setSubmitMessage(
          "The deadline has passed and submissions are now closed"
        );
        return;
      }

      if (!file) {
        setSubmitMessage("You have not entered a file to submit.");
        return;
      }

      const res = await handleUpload({
        file,
        metadata: {
          question: `${week}${props.questionNum}${part}`,
          email: status.loggedIn.email
        },
        path: `${week}${props.questionNum}${part}/${status.loggedIn.email}`
      });
      setSubmitMessage(
        "You have successfully submitted a file. Please refresh the page to resubmit."
      );
      //console.log(res);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    } finally {
      if (file) {
        setDisabled(!disabled);
      }
    }
  };

  const viewSubmission = async (e, part) => {
    e.preventDefault();

    let fileKey;
    var date;

    await axios
      .post(`${process.env.REACT_APP_BACK_END_ENDPOINT}/aws/get_FK`, {
        question: `${week}${props.questionNum}${part}`
      })
      .then((res) => {
        if (!res.data) {
          setSubmissionMessage("You have no submissions for this question.");
        } else {
          fileKey = res.data.fileKey;
          date = res.data.date;
          const newOption = fileKey.replace("@", "%40");
          console.log(newOption);
          window.open(
            `https://cc-backend.s3.ca-central-1.amazonaws.com/${newOption}`,
            "_blank" // <- This is what makes it open in a new window.
          );
          var formattedDate = new Date(date).toLocaleString();
          setSubmissionMessage(`Last submitted: ${formattedDate}`);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div key={props.thisPart.part}>
      <div className="part-title">{`PART ${props.thisPart.part} [${props.thisPart.points} POINTS]`}</div>
      <hr className="linebreak"></hr>
      <div className="part-text">{props.thisPart.problemDescription}</div>
      <div className="part-subtitle part-grid">
        <div>Input</div>
        <div className="part-italics">Sample Input</div>
      </div>
      <hr className="linebreak"></hr>
      <div className="part-text part-grid">
        <div>{props.thisPart.inputSpecification}</div>
        <div className="part-sample">{getData(props.thisPart.sampleInput)}</div>
      </div>

      <div className="part-subtitle part-grid">
        <div>Output</div>
        <div className="part-italics">Sample Output</div>
      </div>
      <hr className="linebreak"></hr>
      <div className="part-text part-grid">
        <div>{props.thisPart.outputSpecification}</div>
        <div className="part-sample">
          {getData(props.thisPart.sampleOutput)}
        </div>
      </div>

      <div className="part-subtitle part-grid">
        <div>Hints and Resources</div>
        <div className="part-italics">Submit a Solution</div>
      </div>
      <hr></hr>
      <div className="part-grid part-text">
        <div className="add-hints">
          {props.thisPart?.hints?.map((hint) => (
            <>
              <a className="hint-links" href={hint.link}>
                {hint.text}
              </a>
              <br />
            </>
          ))}
        </div>
        <form
          className="problem-button-container"
          //onSubmit={(e) => onSubmit(e, props.thisPart.part)}
        >
          {status.loggedIn?.admin && (
            <>
              <ScrollableMenu
                question={`${week}${props.questionNum}${props.thisPart.part}`}
              />
            </>
          )}

          {!status.loggedIn?.loggedIn && (
            <>
              <div>Please log in to submit a file</div>
            </>
          )}

          {!status.loggedIn?.admin && status.loggedIn?.loggedIn && (
            <>
              {status.loggedIn?.week === parseInt(props.week) && (
                <>
                  <input
                    type="file"
                    accept="text/plain"
                    className="choose-file-button problem-button"
                    id="choose-file"
                    onChange={onChange}
                  />
                  <input
                    disabled={disabled}
                    type="submit"
                    onClick={(e) => onSubmit(e, props.thisPart.part)}
                    className="file-submit-button problem-button"
                    style={
                      disabled
                        ? { opacity: 0.4, fontColor: "black" }
                        : { opacity: 1.0 }
                    }
                  />
                  <div>{submitMessage}</div>
                </>
              )}
              {status.loggedIn?.week !== parseInt(props.week) && (
                <>
                  <div>You are no longer able to submit for this week</div>
                  <br></br>
                </>
              )}
              <button
                className="problem-button file-submit-button view-button"
                onClick={(e) => viewSubmission(e, props.thisPart.part)}
              >
                View Submission
              </button>
              <div>{submissionMessage}</div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Part;
=======
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "../Context";
import ScrollableMenu from "./ScrollableMenu";

import { useAWSUpload, useAWSDelete } from "../../utilities";

const Part = (props) => {
  const [file, setFile] = useState();
  const [submitMessage, setSubmitMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const { handleUpload, progress } = useAWSUpload();

  const status = useContext(AuthContext);
  const week = props.week;

  function getData(spec) {
    if (Array.isArray(spec)) {
      return spec.map((sample) => <div>{sample}</div>);
    }
    return <div>{spec}</div>;
  }

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  function deadlineCutoff() {
    const today = new Date(Date.now());

    //const today = new Date(Date.UTC(2021, 6, 4, 7, 5, 0));
    console.log("time now!", today.toTimeString());
    const week1End = new Date(Date.UTC(2021, 6, 12, 4, 0, 0));
    // const week1End = new Date(Date.UTC(2021, 6, 4, 7, 20, 0));
    console.log("time close!", week1End.toTimeString());
    console.log(props.week);
    const week2End = new Date(Date.UTC(2021, 6, 19, 4, 0, 0));
    const week3End = new Date(Date.UTC(2021, 6, 26, 4, 0, 0));
    const week4End = new Date(Date.UTC(2021, 7, 2, 4, 0, 0));

    if (props.week === "4" && today.getTime() > week4End.getTime()) {
      return false;
    } else if (props.week === "3" && today.getTime() > week3End.getTime()) {
      return false;
    } else if (props.week === "2" && today.getTime() > week2End.getTime()) {
      return false;
    } else if (props.week === "1" && today.getTime() > week1End.getTime()) {
      return false;
    } else {
      return true;
    }
  }

  const onSubmit = async (e, part) => {
    e.preventDefault();
    try {
      if (!deadlineCutoff()) {
        setSubmitMessage(
          "The deadline has passed and submissions are now closed"
        );
        return;
      }

      if (!file) {
        setSubmitMessage("You have not entered a file to submit.");
        return;
      }

      const res = await handleUpload({
        file,
        metadata: {
          question: `${week}${props.questionNum}${part}`,
          email: status.loggedIn.email
        },
        path: `${week}${props.questionNum}${part}/${status.loggedIn.email}`
      });
      setSubmitMessage(
        "You have successfully submitted a file. Please refresh the page to resubmit."
      );
      //console.log(res);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    } finally {
      if (file) {
        setDisabled(!disabled);
      }
    }
  };

  const viewSubmission = async (e, part) => {
    e.preventDefault();

    let fileKey;
    var date;

    await axios
      .post(`${process.env.REACT_APP_BACK_END_ENDPOINT}/aws/get_FK`, {
        question: `${week}${props.questionNum}${part}`
      })
      .then((res) => {
        if (!res.data) {
          setSubmitMessage("You have no submissions for this question.");
        } else {
          fileKey = res.data.fileKey;
          date = res.data.date;
          const newOption = fileKey.replace("@", "%40");
          console.log(newOption);
          window.open(
            `https://cc-backend.s3.ca-central-1.amazonaws.com/${newOption}`,
            "_blank" // <- This is what makes it open in a new window.
          );
          var formattedDate = new Date(date);
          console.log(formattedDate);
          setSubmissionMessage("Last submitted at: ", formattedDate.toString());
          setSubmissionMessage("Last submitted at: ", formattedDate);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div key={props.thisPart.part}>
      <div className="part-title">{`PART ${props.thisPart.part} [${props.thisPart.points} POINTS]`}</div>
      <hr className="linebreak"></hr>
      <div className="part-text">{props.thisPart.problemDescription}</div>
      <div className="part-subtitle part-grid">
        <div>Input</div>
        <div className="part-italics">Sample Input</div>
      </div>
      <hr className="linebreak"></hr>
      <div className="part-text part-grid">
        <div>{props.thisPart.inputSpecification}</div>
        <div className="part-sample">{getData(props.thisPart.sampleInput)}</div>
      </div>

      <div className="part-subtitle part-grid">
        <div>Output</div>
        <div className="part-italics">Sample Output</div>
      </div>
      <hr className="linebreak"></hr>
      <div className="part-text part-grid">
        <div>{props.thisPart.outputSpecification}</div>
        <div className="part-sample">
          {getData(props.thisPart.sampleOutput)}
        </div>
      </div>

      <div className="part-subtitle part-grid">
        <div>Hints and Resources</div>
        <div className="part-italics">Submit a Solution</div>
      </div>
      <hr></hr>
      <div className="part-grid part-text">
        <div className="add-hints">
          <b> HINTS GO HERE </b>
          {
            // ADD IN HINTS AND RESOURCES
          }
        </div>
        <form
          className="problem-button-container"
          //onSubmit={(e) => onSubmit(e, props.thisPart.part)}
        >
          {status.loggedIn?.admin && (
            <>
              <ScrollableMenu
                question={`${week}${props.questionNum}${props.thisPart.part}`}
              />
            </>
          )}

          {!status.loggedIn?.loggedIn && (
            <>
              <div>Please log in to submit a file</div>
            </>
          )}

          {!status.loggedIn?.admin && status.loggedIn?.loggedIn && (
            <>
              {status.loggedIn?.week === parseInt(props.week) && (
                <>
                  <input
                    type="file"
                    accept="text/plain"
                    className="choose-file-button problem-button"
                    id="choose-file"
                    onChange={onChange}
                  />
                  <input
                    disabled={disabled}
                    type="submit"
                    onClick={(e) => onSubmit(e, props.thisPart.part)}
                    className="file-submit-button problem-button"
                    style={
                      disabled
                        ? { opacity: 0.4, fontColor: "black" }
                        : { opacity: 1.0 }
                    }
                  />
                  <div>{submitMessage}</div>
                </>
              )}
              {status.loggedIn?.week !== parseInt(props.week) && (
                <>
                  <div>You are no longer able to submit for this week</div>
                  <br></br>
                </>
              )}
              <button
                className="problem-button file-submit-button view-button"
                onClick={(e) => viewSubmission(e, props.thisPart.part)}
              >
                View Submission
              </button>
              <div>{submissionMessage}</div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Part;