import { useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/Demat/DematStepOne.css";
import InfoCardModal from "../Home/Intro/InfoCardModal";

let DematStepOne = () => {
  let [open, setOpen] = useState(false);
  let navigate = useNavigate();
  let handleOpen = () => {
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <InfoCardModal handleClose={handleClose} open={open} />
      <div className="demat-title-container">
        <h1>Agoi Financial Services</h1>
      </div>
      <h2>Add Demat Account Number</h2>
      <div className="main-demat-container">
        <div className="demat-form">
          <form>
            <label htmlFor="#demat-acc-input">Demat Account Number</label>
            <input
              type="text"
              id="demat-acc-input"
              placeholder="Enter Demat Account Number"
            />
            <p>Your Demat Account Number is an 16 Digit Number</p>

            <label htmlFor="#demat-re-acc-input">
              Confirm Demat Account Number
            </label>
            <input
              type="text"
              id="demat-re-acc-input"
              placeholder="Re-enter Demat Account Number"
            />

            <div className="declare-switch-container">
              <input type="checkbox" name="" id="dec-switch" />
              <label htmlFor="#dec-switch">
                I declare that the above information provided by me is accurate
                and to the best of my knowledge. I will immediately inform
                AgoiFinancialServices of any discrepencies, changes, or
                incorrect information that I become aware of.
              </label>
            </div>
          </form>
        </div>
        <div className="vline"></div>
        <div className="demat-help">
          <div className="questions">
            <div onClick={handleOpen} className="question">
              <p>What is my Demat Account Number?</p>
              <span>{">"}</span>
            </div>
            <hr />
            <div onClick={handleOpen} className="question">
              <p>Why is my Demat Account Number important?</p>
              <span>{">"}</span>
            </div>
            <hr />
            <div onClick={handleOpen} className="question">
              <p>Where to find my Demat Account Number?</p>
              <span>{">"}</span>
            </div>
          </div>
          <div className="instruction">
            <div className="instruction-main">
              Please map your own Demat account to your Agoi Financial Services
              account. You cannot link somebody else's Demat account. Agoi
              Financial Services is not responsible for an erroneous Demat
              information.
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/addaccount");
        }}
        className="submit-btn"
      >
        <button>Add Demat Account Number</button>
      </div>
    </>
  );
};

export default DematStepOne;
