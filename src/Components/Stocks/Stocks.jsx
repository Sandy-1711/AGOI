import StockListItem from "./StockListItem";
import Nav from "../Home/Nav/Nav";
import "../../styles/Stocks/Stocks.css";
import { useEffect, useState } from "react";
import StockDesc from "./StockMain";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { auth } from "../../firebase/firebase";
import { Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../Constants/api_constants";
import Footer from "../Footer/Footer";

let Stocks = () => {
  let [selected, setSelected] = useState(null);
  let [selIdx, setSelIdx] = useState(0);
  let [stocks, setStocks] = useState([]);
  let { addToast } = useToasts();
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  let items = [
    {
      imgurl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/800px-Chennai_Super_Kings_Logo.svg.png",
      name: "Chennai Super Kings Chennai Super Kings Chennai Super Kings",
      subtitle: "Stocks",
      prePrize: 220,
      currPrize: 120,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
    dolorem facere laboriosam non ipsa quaerat nostrum tenetur odit
    repellendus, soluta veniam aliquid. Aspernatur, dignissimos
    reiciendis iusto asperiores perspiciatis tenetur recusandae. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem
    facere laboriosam non ipsa quaerat nostrum tenetur odit repellendus,
    soluta veniam aliquid. Aspernatur, dignissimos reiciendis iusto
    asperiores perspiciatis tenetur recusandae. Lorem ipsum, dolor sit
    amet consectetur adipisicing elit.`,
      qty: 20,
    },
    {
      imgurl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/800px-Chennai_Super_Kings_Logo.svg.png",
      name: "Capgemini",
      subtitle: "Stocks And Comp",
      prePrize: 320,
      currPrize: 420,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
    dolorem facere laboriosam non ipsa quaerat nostrum tenetur odit
    repellendus, soluta veniam aliquid. Aspernatur, dignissimos
    reiciendis iusto asperiores perspiciatis tenetur recusandae. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem
    facere laboriosam non ipsa quaerat nostrum tenetur odit repellendus,
    soluta veniam aliquid. Aspernatur, dignissimos reiciendis iusto
    asperiores perspiciatis tenetur recusandae. Lorem ipsum, dolor sit
    amet consectetur adipisicing elit.`,
      qty: 30,
    },
    {
      imgurl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/800px-Chennai_Super_Kings_Logo.svg.png",
      name: "Kolata Night Riders",
      subtitle: "Stocks",
      prePrize: 120,
      currPrize: 240,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
    dolorem facere laboriosam non ipsa quaerat nostrum tenetur odit
    repellendus, soluta veniam aliquid. Aspernatur, dignissimos
    reiciendis iusto asperiores perspiciatis tenetur recusandae. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem
    facere laboriosam non ipsa quaerat nostrum tenetur odit repellendus,
    soluta veniam aliquid. Aspernatur, dignissimos reiciendis iusto
    asperiores perspiciatis tenetur recusandae. Lorem ipsum, dolor sit
    amet consectetur adipisicing elit.`,
      qty: 10,
    },
    {
      imgurl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/800px-Chennai_Super_Kings_Logo.svg.png",
      name: "Mumbai Indians",
      subtitle: "Stocks",
      prePrize: 150,
      currPrize: 120,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
    dolorem facere laboriosam non ipsa quaerat nostrum tenetur odit
    repellendus, soluta veniam aliquid. Aspernatur, dignissimos
    reiciendis iusto asperiores perspiciatis tenetur recusandae. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem
    facere laboriosam non ipsa quaerat nostrum tenetur odit repellendus,
    soluta veniam aliquid. Aspernatur, dignissimos reiciendis iusto
    asperiores perspiciatis tenetur recusandae. Lorem ipsum, dolor sit
    amet consectetur adipisicing elit.`,
      qty: 20,
    },
    {
      imgurl: "https://wallpapercave.com/wp/wp2458609.jpg",
      name: "Punjab XI Kings",
      subtitle: "Stocks",
      prePrize: 220,
      currPrize: 120,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
    dolorem facere laboriosam non ipsa quaerat nostrum tenetur odit
    repellendus, soluta veniam aliquid. Aspernatur, dignissimos
    reiciendis iusto asperiores perspiciatis tenetur recusandae. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem
    facere laboriosam non ipsa quaerat nostrum tenetur odit repellendus,
    soluta veniam aliquid. Aspernatur, dignissimos reiciendis iusto
    asperiores perspiciatis tenetur recusandae. Lorem ipsum, dolor sit
    amet consectetur adipisicing elit.`,
      qty: 20,
    },
    {
      imgurl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/800px-Chennai_Super_Kings_Logo.svg.png",
      name: "Mumbai Indians",
      subtitle: "Stocks",
      prePrize: 150,
      currPrize: 120,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
    dolorem facere laboriosam non ipsa quaerat nostrum tenetur odit
    repellendus, soluta veniam aliquid. Aspernatur, dignissimos
    reiciendis iusto asperiores perspiciatis tenetur recusandae. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem
    facere laboriosam non ipsa quaerat nostrum tenetur odit repellendus,
    soluta veniam aliquid. Aspernatur, dignissimos reiciendis iusto
    asperiores perspiciatis tenetur recusandae. Lorem ipsum, dolor sit
    amet consectetur adipisicing elit.`,
      qty: 20,
    },
    {
      imgurl: "https://wallpapercave.com/wp/wp2458609.jpg",
      name: "Punjab XI Kings",
      subtitle: "Stocks",
      prePrize: 220,
      currPrize: 120,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
    dolorem facere laboriosam non ipsa quaerat nostrum tenetur odit
    repellendus, soluta veniam aliquid. Aspernatur, dignissimos
    reiciendis iusto asperiores perspiciatis tenetur recusandae. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem
    facere laboriosam non ipsa quaerat nostrum tenetur odit repellendus,
    soluta veniam aliquid. Aspernatur, dignissimos reiciendis iusto
    asperiores perspiciatis tenetur recusandae. Lorem ipsum, dolor sit
    amet consectetur adipisicing elit.`,
      qty: 20,
    },
  ];
  let changeBg = (idx) => {
    console.log(idx);
    setSelected(idx);
  };

  let fetchAvailableStocks = async () => {
    try {
      setStocks([]);
      let data = await axios.get(`${BASE_URL}/stock/available-stocks`);
      if (data && data.data && data.data.data) {
        console.log(data.data.data);
        setStocks(data.data.data);
      }
    } catch (e) {
      console.log(e);
      setStocks([]);
      addToast("couldn't fetch available stocks", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
    }
  };
  let fetchSoldOutStocks = async () => {
    setStocks([]);
    try {
      let data = await axios.get(`${BASE_URL}/stock/sold-out-stocks`);
      if (data && data.data && data.data.data) {
        console.log(data.data.data);
        setStocks(data.data.data);
      }
    } catch (e) {
      setStocks([]);
      console.log(e);
      addToast("couldn't fetch sold out stocks", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
    }
  };
  let changeTab = async (el, idx) => {
    if (selected == null)
      document
        .querySelector(".active-st-tab")
        .classList.remove("active-st-tab");
    if (selected) selected.target.classList.remove("active-st-tab");
    el.target.classList.add("active-st-tab");
    if (idx == 0) {
      await fetchAvailableStocks();
    } else {
      await fetchSoldOutStocks();
    }
    setSelIdx(idx);
    setSelected(el);
  };

  useEffect(() => {
    fetchAvailableStocks();
  }, [state]);
  return (
    // !state ? (
    //   <Navigate to={"/login"} />
    // ) : 
    (
      <>
        <div className="stocks-main-content">
          <div className="stocks-heading">
            <h3>Browse Companies</h3>
            {/* {state.is_completed_profile ? (
            <div className="complete-profile-stocks"></div>
          ) : (
            <div className="complete-profile-stocks">
              <p>Complete your profile to get an extension</p>
              <div
                onClick={() => navigate("/complete-profile")}
                className="complete-profile-stocks-btn"
              >
                Complete Profile
              </div>
            </div>
          )} */}
          </div>
          <div className="stocks-tab">
            <div onClick={(el) => changeTab(el, 0)} className="tab active-st-tab">
              Spotlight
            </div>
            <div onClick={(el) => changeTab(el, 1)} className="tab">
              Sold Out
            </div>
          </div>
          <div className="stocks-listing">
            {selIdx === 0
              ? items.map((e, idx) => { //stocks changeed to items
                return (
                  <StockListItem
                    key={idx}
                    type={"Available"}
                    color={"green"}
                    item={e}
                  />
                );
              })
              : items.map((e, idx) => {  //stocks changed to items
                return (
                  <StockListItem
                    key={idx}
                    type={"Sold Out"}
                    color={"red"}
                    item={e}
                  />
                );
              })}
          </div>
        </div>
        {window.innerWidth>800 && <Footer />}
      </>
    ))
};

export default Stocks;
