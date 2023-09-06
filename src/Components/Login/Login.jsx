import { useState } from "react";
import "../../styles/Login/Login.css";
import "../../styles/Login/Login800.css";
import { auth } from "../../firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import Nav from "../Home/Nav/Nav";

let Login = () => {
  const [selected, setSelected] = useState("IN");
  const [phoneNum, setPhoneNum] = useState("");
  const [hasReferral, setHasReferral] = useState(false);
  const [referral, setReferral] = useState("");
  const navigate = useNavigate();
  const loc = useLocation();
  const [loading, setLoading] = useState(false);
  let state = useSelector((state) => state);
  console.log(state);
  console.log(loc);
  const generateRecaptcha = () => {
    console.log("reaching 1");
    if (window.recaptchaVerifier) {
      console.log(window.recaptchaVerifier);
      window.recaptchaVerifier.recaptcha.reset();
    }
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth, "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("response", response);
        },
      },

    );
  };

  const requestOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    if (phoneNum != null && phoneNum.length != 0) {
      generateRecaptcha();
      let appVarifier = window.recaptchaVerifier;
      console.log("appVarifier", appVarifier);
      console.log("reaching hree");
      signInWithPhoneNumber(auth, "+91 " + phoneNum, appVarifier)
        .then((result) => {
          console.log(result);
          window.confirmationResult = result;
          setLoading(false);
          navigate(`/auth/verifyOtp`, {
            state: {
              contactNum: phoneNum,
              hasReferral: hasReferral,
              referral: referral,
            },
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return state ? (
    loc != null && loc.state != null && loc.state.route != null ? (
      <Navigate to={loc.state.route} />
    ) : (
      <Home />
    )
  ) : (
    <>
      {/* {window.innerWidth > 800 && <Nav />} */}
      <div className="loginContainer">
        <img className="loginBack" src="/AGOI/jjh.png" alt="loginback" />
        <div id="sign-in-button"></div>
        {window.innerWidth <= 800 && <div>
          <img src="/AGOI/login-drawable.svg" />
        </div>}
        <div className="loginContainerTop">
          <h1>Welcome to <span>Agoi Financial Services</span></h1>
          <h1>Choose where to invest</h1>
          <p>We provide the platform to serve your needs of making wealth by in various growing startups and companies. Our aim is to provide the utmost care for our customer by providing a way to invest their money to secure their future.</p>
        </div>
        <div className="loginContainerBottom">
          {window.innerWidth > 800 && <div className="loginleft">
            <div >
              <img src="/AGOI/signup.png" alt="signup" />
              <p>Singup</p>
            </div>
            <div>
              <img src="/AGOI/completekyc.png" alt="completeKYC" />
              <p>Complete KYC</p>
            </div>
            <div>
              <img src="/AGOI/invest.png" alt="invest" />
              <p>Invest</p>
            </div>
            <div>
              <img src="/AGOI/returns.png" alt="returns" />
              <p>Harvest Returns</p>
            </div>
          </div>}
          {window.innerWidth > 800 && <div className="loginmiddle">

          </div>}
          <div className="loginright">
            <form onSubmit={requestOtp}>
              <label>Phone Number</label>
              <div>
                <input
                  required
                  minLength={10}
                  maxLength={10}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPhoneNum(e.target.value);
                  }}
                  defaultCountry={"in"}
                  countryCodeEditable={false}
                  className="inp1"
                  id="number"
                  type="tel"
                  placeholder={window.innerWidth > 800 ? "Phone Number" : "Enter your phone number"} />
                {window.innerWidth > 800 && <img className="user" src="/AGOI/fa_user.svg" alt="user" />}
                {window.innerWidth <= 800 && <img className="user" src="/AGOI/material-symbols_call.svg" />}
                {window.innerWidth > 800 && <img className="right" src="/AGOI/right.svg" alt="righticon" />}
              </div>
              {/* {window.innerWidth < 800 && <span>
                Have a referral code
              </span>} */}
              <label>Have a referral code</label>

              <input
                minLength={6}
                maxLength={6}
                onChange={(e) => {

                  console.log(referral.length);
                  if (e.currentTarget.value.length <= 6) {
                    setReferral(e.currentTarget.value);
                  }
                }}
                className="inp2"
                placeholder="Enter 6 digit Referral code"
                type="tel" />
              {/* <button className="loadingbutton"><div></div></button> */}
              <button >{loading ? "LOADING..." : "PROCEED"}</button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="auth-container">
        <h1>Login</h1>
        <div className="phone-input-cont">
          <MuiPhoneNumber
            onChange={(phone) => {
              console.log(phone);
              setPhoneNum(phone);
            }}
            className="phone-input"
            defaultCountry={"in"}
            countryCodeEditable={false}
          />
          <button className="submit-btn" onClick={requestOtp}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        <div className="d-flex mt-2 align-items-center has-referral-code">
          <input
            checked={hasReferral}
            onChange={() => { }}
            onClick={() => {
              setHasReferral(!hasReferral);
            }}
            style={{ marginRight: "5px" }}
            type="radio"
            label="radio"
          />
          <label style={{ padding: "0", margin: "0" }} htmlFor="radio">
            Have a Referral Code
          </label>
        </div>
        {hasReferral ? (
          <div className="d-flex mt-2 align-items-center">
            <input
              value={referral}
              onChange={(e) => {
                console.log(referral.length);
                if (e.currentTarget.value.length <= 6) {
                  setReferral(e.currentTarget.value);
                }
              }}
              style={{ width: "200px", height: "40px" }}
              type="text"
              placeholder="Enter 6 digit Referral code"
            />
          </div>
        ) : (
          ""
        )}
        <div id="sign-in-button"></div>
        <div className="copyright-sec">
          @Copyright 2022 : AgoiFincancialServices
        </div>
      </div> */}
    </>
  );
};

export default Login;
