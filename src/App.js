import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./styles/App.css";
import { auth } from "./firebase/firebase";
import { useEffect } from "react";
import VerifyOtp from "./Components/Login/VerifyOtp";
import { useDispatch } from "react-redux";
import { userCreator } from "./Redux/userAction";
import Gateway from "./Components/PaymentGateway/Gateway";
import Stocks from "./Components/Stocks/Stocks";
import DematStepOne from "./Components/Demat/DematStepOne";
import AddAccountNumber from "./Components/Demat/AddAccountNumber";
import StockMain from "./Components/Stocks/StockMain";
import Investment from "./Components/Investment/Investement";
import CompleteKYC from "./Components/CompleteKYC/CompleteKYC";
import { ToastProvider } from "react-toast-notifications";
import CompleteProfile from "./Components/CompleteKYC/CompleteProfile";
import axios from "axios";
import { BASE_URL } from "./Constants/api_constants";
import GetOrderResponse from "./Components/Stocks/GetOrderResponse";
import Wallet from "./Components/Wallet/Wallet";
import Notify from "./Components/Notify/Notify";
import Cashouthistory from "./Components/CashoutHistory/Cashouthistory"
import Contact from "./Components/Contact/Contact";
import NavMobile from "./Components/Home/Nav/NavMobile";
import Nav from "./Components/Home/Nav/Nav";

let App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        try {
          let data = await axios.post(BASE_URL + "/user/finduser", {
            mobile_number: user.phoneNumber,
          });
          if (data && data.data && data.data.data) {
            dispatch(userCreator({ ...user, ...data.data.data }));
          } else {
            dispatch(userCreator({ ...user }));
          }
        } catch (e) {
          console.log(e);
          dispatch(userCreator({ ...user }));
        }
      } else {
        dispatch(userCreator(null));
      }
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <>
      <HashRouter>
        <ToastProvider>
          <Nav />
          <Routes>
            <Route
              path="/get-return-order"
              index={0}
              element={<GetOrderResponse />}
            />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/complete-kyc" element={<CompleteKYC />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/Cashouthistory" element={<Cashouthistory />} />
            <Route path="/Notify" element={<Notify />} />




            <Route path="/addaccount" element={<AddAccountNumber />} />
            <Route path="/demat" element={<DematStepOne />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth/verifyOtp" element={<VerifyOtp />} />
            <Route path="/payments" element={<Gateway />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/stock-main" element={<StockMain />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <NavMobile />
        </ToastProvider>
      </HashRouter>
    </>
  );
};

export default App;
