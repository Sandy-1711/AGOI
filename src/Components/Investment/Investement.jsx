import React from 'react'
import "../../styles/Investment/Investment.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../Constants/api_constants";
import { useEffect, useState } from "react";
import generatePDF from "./repGenerator";
import SellStocksModal from "./SellStocksModal";
import { lightGreen } from '@mui/material/colors';
import Footer from '../Footer/Footer';
import Nav2 from '../Home/Nav/Nav2';


const Investement = () => {

  let ord = [
    {
      companyName: 'axis bank',
      noshares: 45000,
      currentHolding: 45000,
      averagecost: 9765465761,
      currentValue: 12,
      netcharge: 76.7798465467,
    },
    {
      companyName: 'axis bank',
      noshares: 45000,
      currentHolding: 45000,
      averagecost: 9765465761,
      currentValue: 12,
      netcharge: 76.7798465467,
    },
    {
      companyName: 'axis bank',
      noshares: 45000,
      currentHolding: 45000,
      averagecost: 9765465761,
      currentValue: 12,
      netcharge: 76.7798465467,
    },
    {
      companyName: 'axis bank',
      noshares: 45000,
      currentHolding: 45000,
      averagecost: 9765465761,
      currentValue: 12,
      netcharge: 76.7798465467,
    },
    {
      companyName: 'axis bank',
      noshares: 45000,
      currentHolding: 45000,
      averagecost: 9765465761,
      currentValue: 12,
      netcharge: 76.7798465467,
    },
  ]
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  let [open, setOpen] = useState(false);
  let [modalItem, setModalItem] = useState();
  let [orders, setOrders] = useState([]);
  let fetchPayemnts = async () => {
    handleClose();
    if (state) {
      let data = await axios.get(
        `${BASE_URL}/user/get-user-orders/${state._id}`
      );
      if (data.data && data.data.data) {
        let response = data.data.data;
        console.log(response);
        setOrders(response);
      }
    }
  };
  let handleOpen = (item) => {
    setModalItem(item);
    setOpen(true);
  };
  let handleClose = () => {
    setOpen(false);
  };
  //  console.log(orders.length);
  useEffect(() => {
    // fetchPayemnts();
  }, [state]);
  return (
    <>
      {/* <Nav2/> */}
      <div className='investmentPage'>
        <h1>Browse Investments</h1>
        <div className='investmentTable'>
          <table cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th scope="col">Company Name</th>
                <th scope="col">No. of Shares</th>
                <th className="col">Current Holding</th>
                <th scope="col">Avg. Cost</th>
                <th scope="col">Current Value</th>
                <th scope="col">Net Chg.</th>
                <th scope="col">Sell Stocks</th>
                <th>Export Bills</th>
              </tr>
            </thead>
            <tbody>
              {ord.map((e, idx) => {
                return (
                  <>
                    <tr key={idx + 6}>
                      <td>{e.companyName}</td>
                      <td>{e.noshares}</td>
                      {/* <td>{e.left_shares}</td> */}
                      {/* <td>{e.order_amount / e.no_of_lots}</td> */}
                      {/* <td>{e.stock_id.price_per_lot}</td> */}
                      <td>{e.currentHolding}</td>
                      <td>{e.averagecost}</td>
                      <td>{e.currentValue}</td>
                      <td>{e.netcharge}</td>

                      {/* <td>
                        {e.stock_id.price_per_lot /
                          (e.order_amount / e.no_of_lots)}
                      </td> */}
                      <td>
                        <div
                          onClick={() => handleOpen(e)}
                          className="export-btn1"
                        >
                          Sell Stocks
                        </div>
                      </td>
                      <td>
                        <div
                          onClick={() => generatePDF(e)}
                          className="export-btn2"
                        >
                          Download
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* <SellStocksModal
         handleClose={handleClose}
         item={modalItem}
         open={open}
         fetchPayemnts={fetchPayemnts}
       /> */}

      {/* <div className="investment-heading">
         <h3>Browse Investments</h3>
         <div className="investment-chart d-flex justify-content-around align-items-center">
           <div className="investment-item d-flex flex-column">
             <span style={{ color: "var(--color-light-grey)" }}>
               Total Investment
             </span>
             <p style={{ color: "var(--white-font)" }}>{orders.length}</p>
           </div>
   
         </div>
       </div> */}
      {/* <div className="investment-table">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Company Name</th>
                <th scope="col">No. of Shares</th>
                <th className="col">Current Holding</th>
                <th scope="col">Avg. Cost</th>
                <th scope="col">Current Value</th>
                <th scope="col">Net Chg.</th>
                <th scope="col">Sell Stocks</th>
                <th>Export Bill</th>
              </tr>
            </thead>
            {orders.length === 0 ? (
              ""
            ) : (
              <tbody>
                {orders.map((e, idx) => {
                  return (
                    <>
                      <tr key={idx + 6}>
                        <td>{e.stock_id.stock_name}</td>
                        <td>{e.no_of_stocks}</td>
                        <td>{e.left_shares}</td>
                        <td>{e.order_amount / e.no_of_lots}</td>
                        <td>{e.stock_id.price_per_lot}</td>
                        <td>
                          {e.stock_id.price_per_lot /
                            (e.order_amount / e.no_of_lots)}
                        </td>
                        <td>
                          <div
                            onClick={() => handleOpen(e)}
                            className="export-btn"
                          >
                            Sell Stocks
                          </div>
                        </td>
                        <td>
                          <div
                            onClick={() => generatePDF(e)}
                            className="export-btn"
                          >
                            Download
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            )}
          </table>
          {orders.length === 0 ? (
            <div className="invest-btn d-flex flex-column justify-content-center align-items-center">
              <p>You do not have any holdings yet</p>
              <button
                onClick={() => navigate("/stocks")}
                className="invest-now-btn d-flex justify-content-center align-items-center"
              >
                Invest Now
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div> */}
      {window.innerWidth > 800 && <Footer />}
    </>
  );
};
export default Investement;


