import Nav from "../Home/Nav/Nav";
import "../../styles/Stocks/StockMain.css";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import { BASE_URL } from "../../Constants/api_constants";

let StockMain = () => {
  let routedata = useLocation();
  let [item, setItem] = useState();
  let [open, setOpen] = useState(false);
  let [requiredShares, setRequiresShares] = useState(1);
  let [totalInvestment, setTotalInvestment] = useState(1);
  let [stampDuty, setStampDuty] = useState(1);
  let [txnFee, setTxnFee] = useState(1);
  let [noOfLots, setNoOfLots] = useState(0);
  let [initInv, setInitInv] = useState(1);
  let [total, setTotal] = useState(0);
  let [pricePerShare, setPricePerShare] = useState(0);
  let [disable, setDisable] = useState(false);
  let state = useSelector((state) => state);
  let navigate = useNavigate();

  let { addToast } = useToasts();
  let generateOrder = async () => {
    try {
      setDisable(true);
      let data = await axios.post(BASE_URL + "/user/createOrder", {
        amount: total,
        csid: state._id,
        csmail: state.email_id,
        csphone: state.mobile_number,
        stock_id: item._id,
        no_of_stocks: requiredShares,
        no_of_lots: noOfLots,
        price_per_share: item.price_per_lot / item.share_per_lot,
      });
      if (data.data.error) {
        setDisable(false);
        addToast("order was not generated", { appearance: "error" });
      } else {
        let response = data.data;
        console.log(response);
        addToast("order was generated", { appearance: "success" });
        //navigate(response.order_meta.return_url);
        window.history[0] = response.payment_link;
        console.log(response.data.payment_link);
        let anchor = document.createElement("a");
        anchor.href = response.data.payment_link;
        anchor.click();
      }
    } catch (e) {
      console.log(e);
      setDisable(false);
      addToast("order was not generated", { appearance: "error" });
    }
  };
  let addStocks = () => {
    setNoOfLots(noOfLots + 1);
    let ttlInv = (noOfLots + 1) * item.price_per_lot;
    setTotalInvestment(ttlInv);
    setRequiresShares((noOfLots + 1) * item.share_per_lot);
    let trxnFee = (ttlInv * item.transaction_fee) / 100;
    setTxnFee(trxnFee);
    let ttl = trxnFee + item.stamp_duty + ttlInv;
    setTotal(ttl);
  };
  let decStocks = () => {
    let ttlInv = (noOfLots - 1) * item.price_per_lot;
    if (ttlInv >= 10000) {
      setTotalInvestment(ttlInv);
      setNoOfLots(noOfLots - 1);
      setRequiresShares((noOfLots - 1) * item.share_per_lot);
      let trxnFee = (ttlInv * item.transaction_fee) / 100;
      setTxnFee(trxnFee);
      let ttl = trxnFee + item.stamp_duty + ttlInv;
      setTotal(ttl);
    } else {
      addToast("price must be greater than 10000", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
    }
  };

  useEffect(() => {
    console.log(routedata.state);
    setItem(routedata.state);
    let stateData = routedata.state;
    let lots = Math.ceil(10000 / stateData.price_per_lot);
    setNoOfLots(lots);

    let reqShare = lots * stateData.share_per_lot;
    setRequiresShares(reqShare);
    let ttlInv = lots * stateData.price_per_lot;
    setTotalInvestment(ttlInv);
    setInitInv(ttlInv);
    let txnRpe =
      (lots * stateData.price_per_lot * stateData.transaction_fee) / 100;
    setTxnFee(txnRpe);
    let ttl = txnRpe + stateData.stamp_duty + ttlInv;
    setTotal(ttl);
  }, []);

  return (

    !state || !item ? (
      <>
        <Login />
      </>
    ) : 
    (
      <>
        <div className="stock-main-container">
          <Nav />
          <div className="stock-des-main">
            <div className="stocks-des">
              <div className="stock-des-heading">
                <div className="stock-des-heading-img">
                  <img src={item.stock_icon} alt="" />
                </div>
                <div className="stock-heading-content">
                  <div className="heading-title">
                    <div className="heading-title-container">
                      <h3>{item.stock_name}</h3>
                    </div>
                  </div>
                  <div className="stock-heading-subtitle">
                    <span>{item.stock_sp_id}</span>
                    <span></span>
                    <span>{item.stock_location}</span>
                  </div>
                </div>
                <div
                  style={{
                    background:
                      item.stock_status === "Available"
                        ? "var(--defused-green)"
                        : "var(--orange-font)",

                    color:
                      item.stock_status === "Available"
                        ? "var(--green-colot)"
                        : "var(--white-font)",
                  }}
                  className="stock-heading-status"
                >
                  {item.stock_status}
                </div>
              </div>
              <div className="stock-description">
                <div className="face-value">
                  <p>Face Value</p>
                  <p className="face-main">{item.face_value}</p>
                </div>
                <div className="price-per-share">
                  <p>Price Per Share</p>
                  <p className="price-main">
                    &#8377;{item.price_per_lot / item.share_per_lot}
                  </p>
                </div>
                <div className="available-on">
                  <p>Available On</p>
                  <p className="d-flex avail-main">
                    {item.available_on === "NSDL" ? (
                      <img src="/nsdl.png" alt="" />
                    ) : item.available_on === "CDSL" ? (
                      <img src="/cdsl.png" alt="" />
                    ) : (
                      <>
                        <img src="/nsdl.png" alt="" />
                        <img src="/cdsl.png" alt="" />
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="company-glace-btn">Company at a glance</div>
            </div>
            <div className="pricing">
              <div className="pricing-heading d-flex justify-content-between">
                <div>
                  Price Per Share <p>{item.price_per_lot}</p>
                </div>
                <div>
                  No of lots
                  <div className="pricing-actions d-flex align-items-center">
                    <div
                      onClick={addStocks}
                      style={{ userSelect: "none", cursor: "pointer" }}
                      className="d-flex justify-content-center align-items-center inc"
                    >
                      +
                    </div>
                    <span>{noOfLots}</span>
                    <div
                      onClick={decStocks}
                      style={{ userSelect: "none", cursor: "pointer" }}
                      className="d-flex justify-content-center align-items-center dec"
                    >
                      -
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="price-list">
                <div className="d-flex justify-content-between align-items-center price-line">
                  <span
                    style={{
                      color: "var(--color-light-grey)",
                      fontWeight: "bold",
                    }}
                  >
                    No of Share
                  </span>
                  <span style={{ color: "var(--white-font)" }}>
                    {requiredShares}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center price-line">
                  <span
                    style={{
                      color: "var(--color-light-grey)",
                      fontWeight: "bold",
                    }}
                  >
                    Total Investment
                  </span>
                  <span style={{ color: "var(--white-font)" }}>
                    {totalInvestment}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center price-line">
                  <span
                    style={{
                      color: "var(--color-light-grey)",
                      fontWeight: "bold",
                    }}
                  >
                    Stamp duty
                  </span>
                  <span style={{ color: "var(--white-font)" }}>
                    {item.stamp_duty}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center price-line">
                  <span
                    style={{
                      color: "var(--color-light-grey)",
                      fontWeight: "bold",
                    }}
                  >
                    Transaction fee (2%)
                  </span>
                  <span style={{ color: "var(--white-font)" }}>{txnFee}</span>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center price-line">
                <h6
                  style={{ color: "var(--color-light-grey)", fontWeight: "bold" }}
                >
                  Total Investment
                </h6>
                <span style={{ color: "var(--white-font)" }}>{total}</span>
              </div>
              {!state.is_completed_profile ? (
                <div
                  onClick={() => navigate("/complete-profile")}
                  className="complete-profile-btn"
                >
                  Complete Profile
                </div>
              ) : !state.is_completed_kyc ? (
                <div
                  onClick={() => navigate("/complete-kyc")}
                  className="complete-profile-btn"
                >
                  Complete KYC
                </div>
              ) : item.stock_status === "Available" ? (
                <button
                  disabled={disable}
                  className="complete-profile-btn"
                  style={{ outline: "none", border: "none" }}
                  onClick={generateOrder}
                >
                  <div style={{ padding: "0", margin: "0" }}>Checkout</div>
                </button>
              ) : (
                "hi"
              )}
            </div>
          </div>
          <div className="stock-main-footer">
            <p>Please read these important legal notices and disclosures</p>{" "}
            <br />
            None of the information displayed on or downloadable from www.joinAgoi
            Financial Services.com (the "website") represents an offer to buy or
            sell or a solicitation of an offer to buy or sell any security, nor
            does it constitute an offer to provide investment advice or service.
            Registered representatives of Agoi Financial Services do not (1)
            Advise any member on the merits or advisability of a particular
            investment or transaction, or (2) Assist in the determination of fair
            value of any security or investment, or (3) Provide legal, tax, or
            transactional advisory services.
          </div>
        </div>
      </>
    )
  );
};

export default StockMain;
