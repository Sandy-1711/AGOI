import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../Constants/api_constants";
import SliderComp from "./SliderComp";

let Slider = () => {
  let [stocks, setStocks] = useState([]);
  let fetchAllStocks = async () => {
    let data = await axios.get(`${BASE_URL}/stock/available-stocks`);
    if (data && data.data && data.data.data) {
      console.log(data.data.data);
      setStocks(data.data.data);
    }
  };

  useEffect(() => {
    fetchAllStocks();
  }, []);
  return (
    !stocks ? (
      ""
    ) : 
    (
      <>
        <div className="slider-comp-home">
          <div className="slider-container">
            {stocks.map((e, idx) => {
              return (
                <SliderComp
                  key={idx}
                  title={e.stock_name}
                  sector={e.stock_sp_id}
                  service={e.stock_location}
                  imgSrc={e.stock_icon}
                />
              );
            })}
          </div>
          <div className="slider-container">
            {stocks.map((e, idx) => {
              return (
                <SliderComp
                  key={idx}
                  title={e.stock_name}
                  sector={e.stock_sp_id}
                  service={e.stock_location}
                  imgSrc={e.stock_icon}
                />
              );
            })}
          </div>
        </div>
      </>
    ));
};

export default Slider;
