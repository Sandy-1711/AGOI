import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../Constants/api_constants";
import Footer from "../Footer/Footer";

let Wallet = () => {
  let state = useSelector((state) => state);
  let [referrals, setReferrals] = useState([]);
  let fetchReferrals = async () => {
    try {
      let data = await axios.get(
        BASE_URL + `/referral/referral-history/${state.referral_code}`
      );
      console.log(data.data);
      if (data.data && data.data.data) {
        setReferrals(data.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (state) fetchReferrals();
  }, [state]);
  return (
    <>
      <div className="wallet">
        <div className="stocks-heading">
          <h3>Referral History</h3>
        </div>
      </div>
      <div style={{ padding: "0 6rem" }} className="table-con">
        <table className="table mt-3">
          <thead>
            <tr>
             <p style={{ color: "var(--white-font)" }}>{referrals.length}</p>

              <th scope="col">Sender</th>
              <th scope="col">Date</th>
              <th scope="col">Purchase</th>
              <th scope="col">Referral Amount</th>
              <th scope="col">Availed</th>
            </tr>
          </thead>
          {referrals.length === 0 ? (
            <>
              <tbody>
                <tr>
                  <td
                    style={{ color: "", textAlign: "center" }}
                    colSpan={4}
                  >
                    No Data Found
                  </td>
                </tr>
              </tbody>
            </>
          ) : (
            <tbody>
              {referrals.map((e, idx) => {
                return (
                  <>
                    <tr key={idx + 1}>
                      <td>{e.purchased_by ? e.purchased_by.name : ""}</td>
                      <td>{e.createdAt.substr(0, 10)}</td>
                      <td>
                        {e.for_order_id.stock_id
                          ? e.for_order_id.stock_id.stock_name
                          : ""}
                      </td>
                      <td>{e.price_to_be_availed}</td>
                      <td>{e.availed ? "Yes" : "No"}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      {window.innerWidth>800 && <Footer/>}
    </>
  );
};

export default Wallet;
