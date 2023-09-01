import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../styles/Login/VerifyOtp.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../Constants/api_constants";
import { auth } from "../../firebase/firebase";
import '../../styles/Login/VerifyOtp800.css'
let VerifyOtp = (props) => {
  let location = useLocation();
  console.log(location);
  let params = useParams();
  const [mobile, setMobile] = useState("");
  let [code, setCode] = useState("");
  const [hasReferral, setHasReferral] = useState("");
  const [referral, setReferral] = useState("");
  let navigate = useNavigate();

  let registerUser = async (user) => {
    try {
      let data = await axios.post(
        BASE_URL + "/user/create",
        hasReferral
          ? {
            mobile_number: user.phoneNumber,
            referred_code: referral,
          }
          : {
            mobile_number: user.phoneNumber,
          }
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  let veridyOTP = async () => {
    if (code) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(code)
        .then(async (result) => {
          const user = result.user;
          console.log(user);
          await registerUser(user);
          navigate("/complete-profile", { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    console.log(props);
    console.log(params);
    console.log(location);
    console.log(window.recaptchaVerifier);
    console.log(window.confirmationResult);
    if (location.state && location.state.contactNum) {
      setMobile(location.state.contactNum);
      setHasReferral(location.state.hasReferral);
      if (location.state.hasReferral) {
        setReferral(location.state.referral);
      }
    }
    return () => {
      setCode("");
      setMobile("");
    };
  }, []);

  return ( //! lagao
    //   window.confirmationResult &&
    //   location.state &&
    //   location.state.contactNum
    // ) ? (
    //   <Navigate to={"/login"} />
    // ) : (
    <>
      <div className="verify-otp">
        {window.innerWidth <= 800 && <h1>Verification</h1>}
        {window.innerWidth <= 800 && <img className="back" src="/ep_back.svg" alt="back" />}
        <img className="phone-img" src="/otp.svg"></img>
        <h1>Check your phone</h1>
        <p className="send-otp-txt">
          Please enter your OTP below
          <br />
        </p>
          <span>We sent a 6 digit OTP to {mobile}</span>
        <OTPInput
          value={code}
          onChange={(code) => setCode(code)}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          secure
        />
        <button onClick={veridyOTP} className="verify-otp-btn">
          Verify OTP
        </button>
      </div>
    </>
  );
};

export default VerifyOtp;
