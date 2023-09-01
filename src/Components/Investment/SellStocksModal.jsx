import { Modal } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BASE_URL } from "../../Constants/api_constants";
import "../../styles/Investment/SellStockModal.css";




let SellStocksModal = ({ handleClose, open, item, fetchPayemnts }) => {
  let [qty, setQty] = useState(0);
  let state = useSelector((state) => state);
  // console.log(state);
  let [max, setMax] = useState(0);
  let { addToast } = useToasts();
  let [price_per_share, setPricePerShare] = useState(0);
  let [amount, setAmount] = useState(0);
  let postSellStock = async () => {
    try {
      let data = await axios.post(BASE_URL + "/stock/sell-stock", {
        order_id: item._id,
        stocks_qty_to_be_sold: qty,
        total_amount: amount,
        user_id: state._id,
      });
      console.log(data.data);
      if (data.data && data.data.data) {
        addToast("sell request has been created", {
          appearance: "success",
          autoDismiss: true,
        });
        fetchPayemnts();
      } else {
        addToast(data.data.message, { appearance: "error", autoDismiss: true });
      }
    } catch (e) {
      console.log(e);
      addToast("error occurred", { appearance: "error", autoDismiss: true });
    }
    
  };
  const onChange = (e) => {
       if (e.target.value <= max) {
                     setAmount(
                       (e.target.value * price_per_share).toPrecision(4)
                     );
                     setQty(e.target.value);
                   }
                 
  };

  useEffect(() => {
    if (item) {
      setQty(item.left_shares === 0 ? 0 : 1);
      let pps = item.stock_id.price_per_lot / item.stock_id.share_per_lot;
      setPricePerShare(pps);
      setAmount(pps);
      setMax(item.left_shares);
      console.log(item.left_shares)
    }
  }, [item]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="sell-card-modal">
          <h2>Sell Stocks</h2>
          <div className="row">
            <div className="col-12">
              <label htmlFor="">Sell Stocks*</label>
              <input
                type="number"
                max={max}
                min={max === 0 ? 0 : 1}
                value={qty}
                onChange={onChange}
                // onChange={(e) => {
                //   if (e.target.value <= max) {
                //     setAmount(
                //       (e.target.value * price_per_share).toPrecision(4)
                //     );
                //     setQty(e.target.value);
                //   }
                // }}
               
                placeholder="Enter Referral Number"
              />
            </div>
            <p className="av-stock">Available Stocks : {max}</p>
            <p className="av-stock">Sell Amount : {amount}</p>
            <div className="submit-btn-container">
              <div onClick={postSellStock} className="btn btn-primary">
                Submit
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SellStocksModal;
