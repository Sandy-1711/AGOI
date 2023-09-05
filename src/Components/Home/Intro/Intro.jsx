import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../../../styles/Home/Intro/Intro.css";
import InfoCardModal from "./InfoCardModal";
import ReferralCardModal from "./ReferralModel";
import Slider from "./Slider";
// import Photo from "../../../../public/"
import '../../../styles/Home/Intro/Intro800.css'
let Intro = () => {
  let state = useSelector((state) => state);
  let [open, setOpen] = useState(false);
  let navigate = useNavigate();
  let [openReferral, setOpenReferral] = useState(false);
  let handleOpenReferral = () => {
    setOpenReferral(true);
  };
  let handleCloseReferral = () => {
    setOpenReferral(false);
  };

  let handleClose = () => {
    setOpen(false);
  };
  console.log(state);



  return (
    <>
      <ReferralCardModal
        handleClose={handleCloseReferral}
        open={openReferral}
      />
      <InfoCardModal handleClose={handleClose} open={open} />

      <div className="landing-page">
        <div className="con1">

          <img src="/AGOI/heroimage.png" alt="herobackground" />


          <div className="bottom-left">
            <div>
              <p className="topText">
                Empowering Your Financial <br /> Future: Where Dreams and <br /> Investments Align.
              </p>
            </div>
            <p className="bottomText">Discover the intersection of dreams and investments in our financial realm. Empower your future with expert guidance tailored to your aspirations. Let us guide you towards a prosperous journey where financial success becomes a reality.</p>
          </div>




          <div className="heading-btns">


            <button onClick={() => navigate("/login")} className="acc-btn">
              Get Started
            </button>
          </div>
        </div>


        <div className="container2">
          <div className="container2-text">
            <h1>
              Your Goals, Our Benefits: Why Choose Our Financial Services
            </h1>
          </div>
          <div className="container2-cards">
            <div className="container2-card">
              <img src="/AGOI/transaction 1.png" />
              <h1>Secure Transactions</h1>
              <p> Ensure the safety of your financial data with secure online transactions and encryption protocols.</p>
            </div>
            <div className="container2-card">
              <img src="/AGOI/financial-guide 1.png" />
              <h1>Expert Financial Guidance</h1>
              <p>Access expert advice and insights from seasoned financial professionals to help you make informed decisions.</p>
            </div>
            <div className="container2-card">
              <img src="/AGOI/investment 1.png" />
              <h1>Investment Opportunities</h1>
              <p>Explore a range of investment options designed to grow your wealth over time and achieve your financial milestones.</p>
            </div>
          </div>
        </div>


        <div className="companies">
          <div className="companyCards">

            <div className="company-card">
              <img src="/AGOI/Hero_FinCorp_Logo_New_Final_2013_Vertical_Wiki-removebg-preview 1.png" />
              <h1>
                Hero Fincorp Limited
              </h1>
              <p>Sector</p>
              <h2>Consumer Banking Service</h2>
            </div>
            <div className="company-card">
              <img src="/AGOI/download__1_-removebg-preview 1.png" />
              <h1>Studds
              </h1>
              <p>Sector</p>
              <h2>Consumer Discretioner</h2>
            </div>
            <div className="company-card">
              <img src="/AGOI/pharmeasy-logo 1.png" />
              <h1>CIAL
              </h1>
              <p>Sector</p>
              <h2>Consumer Banking Service</h2>
            </div>
            <div className="company-card">
              <img src="/AGOI/cial-logo_1_-removebg-preview 1.png" />
              <h1>PharmEasy
              </h1>
              <p>Sector</p>
              <h2>Consumer Medicine Service</h2>
            </div>
          </div>

        </div>

        <div className="howWeWorkSection">

          <h1>How We Work</h1>
          <div className="howWeWorkSectionCards">

            <div className="howWeWorkSectionCard">
              <div className="cardImage">

                <img src="/AGOI/enter 2.png" />
              </div>
              <h1>Signup</h1>
              <p>Sign up with confidence. We prioritize your financial security, using advanced encryption to safeguard your personal information. Your trust is our commitment.</p>
            </div>
            <div className="howWeWorkSectionCard">
              <div className="cardImage">

                <img src="/AGOI/verified-user 1.png" />
              </div>
              <h1>Complete KYC</h1>
              <p>Complete your Know Your Customer (KYC) process to ensure a secure and compliant experience. Your cooperation helps us provide you with the best service while maintaining the highest standards of safety.</p>
            </div>
            <div className="howWeWorkSectionCard">
              <div className="cardImage">

                <img src="/AGOI/save-money 1.png" />
              </div>
              <h1>Invest</h1>
              <p>Explore investment opportunities tailored to your goals. Whether you're looking for short-term gains or long-term growth, we have options that suit your needs. Start investing with us to build your financial future.</p>
            </div>
            <div className="howWeWorkSectionCard">
              <div className="cardImage">

                <img src="/AGOI/money-exchange 1.png" />
              </div>
              <h1>Harvest Returns</h1>
              <p>Experience harvesting of Returns on your investments with our carefully curated options. Maximize your potential for long term gains while ensuring a secure and reliable investment environment</p>
            </div>
          </div>

        </div>

        <div className="investmentSection">
          <div className="investmentSection-left">
            <h1>Embark on your investment <br /> journey with just ₹10,000</h1>
            <button>Authorized Entry</button>
          </div>
          <img src="/AGOI/Investment data-rafiki (1) 1.png" />
        </div>


        <div className="buzzintown">
          <h1>We're the buzz in town</h1>
          <div className="buzzintownCards">
            <div className="buzzintownCard">
              <img src="/AGOI/Rectangle_48-removebg-preview 1.png" />
              <div className="buzz-text">
                <h1>Michael Thompson</h1>
                <p>Boost your investment skills with guidance from our expert mentors</p>
              </div>
            </div>
            <div className="buzzintownCard">
              <img src="/AGOI/Rectangle_47-removebg-preview 1.png" />
              <div className="buzz-text">
                <h1>Sarah Johnson</h1>
                <p>Explore the world of investing alongside skilled experts who will illuminate your path</p>
              </div>
            </div>
            <div className="buzzintownCard">
              <img src="/AGOI/Rectangle_46-removebg-preview 1.png" />
              <div className="buzz-text">
                <h1>David Martinez</h1>
                <p>Unlock the secrets of successful investing with guidance from experienced mentors</p>
              </div>
            </div>
          </div>
        </div>



        <div className="thanksSection">
          <div className="text">
            <h1>We're grateful for your presence</h1>
            <p>Keep in contact with us using these communication channels.</p>
          </div>
          <div className="social">
            <img src="/AGOI/twitter.svg" />
            <img src="/AGOI/fb.svg" />
            <img src="/AGOI/insta.svg" />
          </div>
        </div>



        {/* <div className="d-flex flex-column justify-content-center align-items-center referral-container">

          {!state || !state.multiFactor || !state.multiFactor.user ? (
            ""
          ) : (
            <>
              <div className="col-12 d-flex justify-content-center align-items-center">
                <p>Refer a Friend</p>
              </div>
              <div className="referral-code-container-home">{state.referral_code}</div>
            </>

          )}
        </div> */}



      </div>
    </>
  );
};

export default Intro;
