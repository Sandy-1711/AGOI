import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/api_constants";
import "../../styles/Stocks/GetOrderResponse.css";

let GetOrderResponse = (param) => {
  let params = useParams();
  let navigate = useNavigate();
  let searchParams = useSearchParams()[0];
  let [order, setOrder] = useState(null);
  let [loading, setLoading] = useState(false);
  let state = useSelector((state) => state);
  let generatePayment = async (order) => {
    try {
      let bodyData = { ...order };
      bodyData.isReferred = state.isReferred;
      if (state.isReferred) {
        bodyData.referred_code = state.referred_code;
      }
      let data = await axios.post(
        BASE_URL + `/user/generate-payment`,
        bodyData
      );
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  let fetchOrderDetailFromBackend = async () => {
    setLoading(true);
    try {
      let data = await axios.get(
        BASE_URL +
          `/user/get-order/${searchParams.get("order_id")}/${searchParams.get(
            "order_token"
          )}`
      );
      if (data.data && data.data.order) {
        let order = data.data.order;
        if (order.order_status === "ACTIVE") {
          let orderRes = await axios.get(
            BASE_URL +
              `/user/get-order-cashfree/${searchParams.get("order_id")}`
          );
          await generatePayment(orderRes.data.order);
          console.log("updated from there");
          console.log(orderRes.data);
          setOrder(orderRes.data.order);
          setLoading(false);
        } else {
          console.log("updated from here");
          console.log(order);
          setOrder(order);
          setLoading(false);
        }
      } else {
        setOrder(null);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  console.log("order", order);
  useEffect(() => {
    if (state) {
      console.log(state);
      fetchOrderDetailFromBackend();
    }
  }, [state]);
  return loading ? (
    <>
      <h1 style={{ color: "var(--color-light-grey)" }}>Loading...</h1>
    </>
  ) : !loading && (!order || order == null) ? (
    <></>
  ) : (
    <>
      (
      <>
        <div className="order-res-container">
          <div className="img-res-container">
            <img
              src={
                order.order_status == "PAID" ? "/suc_pay.png" : "/fail_pay.png"
              }
              alt=""
            />
          </div>
          <h3>
            {order.order_status === "PAID"
              ? "Payment was successful !"
              : "Payment was failed"}
          </h3>
          <div onClick={() => navigate("/stocks")} className="redir-to-stocks">
            Go to Stocks
          </div>
        </div>
      </>
      );
    </>
  );
};

export default GetOrderResponse;
