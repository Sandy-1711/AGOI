import { green } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/Stocks/Stocks.css";

let StockListItem = ({ onclick, item, color, type }) => {
  let [hikeOrDec, setHikeOrDec] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (item.stock_previous_price < item.price_per_lot) {
      hikeOrDec = item.price_per_lot / item.stock_previous_price;
    } else {
      hikeOrDec = item.stock_previous_price / item.price_per_lot;
    }
    setHikeOrDec(hikeOrDec.toFixed(1));
  }, []);
  return (
    <>
      <div
        onClick={() => {
          navigate("/stock-main", { state: item });
        }}
        className="stock-list"
      >
        <div className={`stock-status ${color}`}>{type}</div>
        <div className="stock-img">
          <img src={item.stock_icon||item.imgurl} alt="" />
        </div>
        <div className="stock-des">
          <div className="stock-title">
            <h3>{item.stock_name||item.name}</h3>
          </div>
          <div className="stock-sector">
            <p>{item.stock_location||item.subtitle}</p>
          </div>
          <div className="stock-type">
            <p>{item.available_on||item.currPrize}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockListItem;
