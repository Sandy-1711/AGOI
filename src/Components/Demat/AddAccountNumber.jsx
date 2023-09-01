import { useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/Demat/AddAccountNumber.css";
import InfoCardModal from "../Home/Intro/InfoCardModal";

let AddAccountNumber = () => {
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
      <div className="account-title-container">
        <h1>Agoi Financial Services</h1>
      </div>
      <h2>Add your Account Number</h2>
      <div className="main-account-container">
        <div className="account-form">
          <form>
            <label htmlFor="#account-acc-input">Account Number</label>
            <input
              type="text"
              id="account-acc-input"
              placeholder="Enter your bank Account Number"
            />

            <label htmlFor="#account-acc-input">Confirm Account Number</label>
            <input
              type="text"
              id="account-acc-input"
              placeholder="Confirm your bank Account Number"
            />

            <label htmlFor="#account-acc-input">Account Number</label>
            <input
              type="text"
              id="account-acc-input"
              placeholder="Enter your bank Account Number"
            />
            <label htmlFor="#account-re-acc-input">
              Confirm Demat Account Number
            </label>
            <input
              type="text"
              id="account-re-acc-input"
              placeholder="Re-enter Demat Account Number"
            />

            <div className="declare-switch-container">
              <input type="checkbox" name="" id="dec-switch" />
              <label htmlFor="#dec-switch">I have an NRO bank account</label>
            </div>
          </form>
        </div>
        <div className="vline"></div>
        <div className="account-help">
          <div className="questions">
            <h1>Why do we need your Bank Details?</h1>
            <p>
              Agoi Financial Services requests bank account information from its
              consumers in order to expedite regulatory KYC. This will be your
              bank account that you use to add funds to your Agoi Financial
              Services wallet. Have funds ready to deposit in your wallet.
            </p>
          </div>
          <div className="instruction">
            <div className="instruction-main">
              Please map your own bank account to your Agoi Financial Services
              Portal account. You cannot link a third-party or somebody else's
              bank account to your Agoi Financial Services Portal account.
            </div>
          </div>
        </div>
      </div>
      <div className="declare-switch-container-two">
        <input type="checkbox" name="" id="dec-switch" />
        <label htmlFor="#dec-switch">
          I declare that the above information provided by me is accurate and to
          the best of my knowledge. I will immediately inform Agoi Financial
          Services of any discrepancies, changes, or incorrect information that
          I become aware of.
        </label>
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
        className="submit-btn"
      >
        <button>Add Bank Account</button>
      </div>
    </>
  );
};

export default AddAccountNumber;
