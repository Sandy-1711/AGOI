import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { auth } from "../../../firebase/firebase";
import "../../../styles/Home/Nav/Nav.css";
import Sell from "../../Investment/Sell";
import Ping from "../../Notify/Ping"
import { useToasts } from "react-toast-notifications";

import { BASE_URL } from "../../../Constants/api_constants";
import axios from "axios";
import { useEffect, useState } from "react";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import moment from "moment";

import '../../../styles/Home/Nav/Navlater.css'
import '../../../styles/Home/Nav/Nav800.css'



let Nav = () => {

  let path = useLocation().pathname;

  let navigate = useNavigate();
  // const reducer = (state,action) => {
  //   switch()
  // }

  // var started
  const [user, setUser] = useState([])
  let { addToast } = useToasts();
  let [open, setOpen] = useState(false);
  let [opens, setOpens] = useState(false);
  let [check, setCheck] = useState(false);
  const [totalseen, setTotalseen] = useState();
  let [modalItem, setModalItem] = useState();
  const [counts, setcounts] = useState([])
  // const [first, setFirst] = useState(true)
  let [notification, setNotification] = useState([])
  const [usernotifications, setuserNotifications] = useState([])
  let [modalItems, setModalItems] = useState();
  let [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();
  //var ends


  let state = useSelector((state) => state); // fectching user data from redux store
  console.log(state, " nav");
  const [isActive, setIsActive] = useState(false);
  let signoutHandler = async () => {
    await auth.signOut();  // calling auth singout to logout the user
  };

  let handleOpen = (item) => {  // it open the cashout input box
    setModalItem(item);
    setOpen(true);              //use state
  };

  let handleClose = () => {     // close the
    setOpen(false);
  };




  let handleOpens = (e) => {   // it open the notification input box
    // setModalItems(items);
    // items.preventDefault();
    // jh();
    setOpens(true);
  };

  let handleCloses = () => {
    setOpens(false);
  };

  let fetchuser = async () => { // to fetch the user from the get by ID api
    // handleClose();
    // handleCloses();

    if (state) {
      let data = await axios.get(
        `${BASE_URL}/user/${state._id}`
      );
      if (data.data && data.data.data) {
        let response = data.data.data;
        console.log(response);
        setOrders(response);
        setUser(response);
        // setNotification(response);
        // setStatus(response);

        // console.log(orders);
      }
    }
  };

  // console.log(usernotifications.data._id);




  let fetchstatus = async () => {
    // handleClose();
    // handleCloses();
    // console.log(state._id,'this is id')
    if (state) {
      var data = await axios.get(
        `${BASE_URL}/user/user-notification/${state._id}`); // user id 


      console.log(data);
      var notifyid = (data.data.data);

      notifyid.forEach(element => {
        console.log(element);
        console.log(element._id);
      });





      if (data.data && data.data.data) {
        let response = data.data;
        console.log(response);

        // setOrders(response);
        // setUser(response);
        setuserNotifications(response)
        setStatus(response);
      }
    }
  };











  let handleRead = async (event, nID) => {
    try {



      let data = await axios.post(BASE_URL + `/user/user-notification/${nID}`, {
        status: true,



      });

      if (data.data && data.data.data) {
        // addToast("Notification has been update", {
        //   appearance: "success",
        //   autoDismiss: true,
        // });
        fetchstatus();
      } else {
        addToast(data.data.message, { appearance: "error", autoDismiss: true });
      }
    } catch (e) {
      console.log(e);
      addToast("error occurred", { appearance: "error", autoDismiss: true });
    }

  };


  useEffect(() => {
    // fetchuser();
    // fetchstatus();
    console.log(state);
    // above two are removed to remove error
    // console.log(state._id)

  }, [state]);

  return (
    <>
      {/* <Sell
        handleClose={handleClose}
        item={modalItem}
        walletBalance={orders.wallet_balance}
        open={open}
        fetchuser={fetchuser}
      /> */}

      {/* <Ping
        handleCloses={handleCloses}
        // item={modalItems}   
        open={opens}
        fetchuser={fetchuser}
        counts={counts}
      /> */}






      <div id="navbar" className="navbar">
        {/* <GiHamburgerMenu className="burger"
          onClick={() => setOpen(!open)} /> */}
        <div className="logo">
          <p>
            <Link to={"/"}><img src="/AGOI/logo.png" href="logo"
            /></Link>
            {/* {state.usernotifications.user_id} */}
            {/* &#8377; {state.wallet_balance} */}
          </p>

        </div>


        {/* {!state || !state.multiFactor || !state.multiFactor.user ? (
          ""
        ) : (
          <>
            <div className="links v-class-resp h-nav-resp">

          

              <div className="dropdown">

                <div className="cor" >

                  <span className="material-symbols-outlined">Wallet</span>
                  <div className="dropdown-content">
                   
                 



                    <Link to={"/Cashouthistory"}>Cashout History</Link>
                  </div>
                </div>
              </div>
            </div>




            <div className="dropdowns">
              <div className="button">


                <NotificationBadge count={usernotifications.unseenTotal} effect={Effect.SCALE} />
                <span style={{ fontSize: "28px" }} className="material-symbols-outlined">notifications</span>
                <div className="dropdown-contents">

                  <div className="table-containers">
                    <table className="table">
                      <thead>
                        <tr>

                          <div className="investment-item d-flex flex-column">
                            <span style={{ fontSize: "24px" }}>
                              Notifications

                            </span>

                          </div>
                        </tr>
                      </thead>



                      {
                        usernotifications.
                          length === 0 ? (
                          "No New Notification"
                        ) : (
                          <tbody>

                            {usernotifications.data.slice().reverse()
                              .map((e) => {

                                return (
                                  <>

                                    <tr >

                                      <div className="we">







                                        <div onClick={event => handleRead(event, e._id)} ><td onClick={() => { handleOpens(setcounts(e.message)) }}>{e.message}</td>
                                          <td >{e.status ? "" : <div className="dot" ></div>}</td>

                                        </div>



                                        <div className="ee">
                                          <td style={{ fontSize: "9px" }}>{moment(e.createdAt).fromNow()}</td>

                                        </div>
                                      </div>
                                    </tr>


                                  </>
                                );
                              })}
                          </tbody>
                        )}

                    </table>

                  </div>

                </div>
              </div>

            </div>

          </>
        )} */}

        {/* <div className="login">
          <a href="/" style={path==='/'?{color:'#396DFB'}:{color:'black'}}>Home</a>
          <a href="/contact" style={path==='/contact'?{color:'#396DFB'}:{color:'black'}}>Contact</a>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/login")}>Signup</button>
          <img className="usericon" src="/usericonnav.svg" alt="profile"/>
        </div> */}


        <div className="login">
          {/* {!state || !state.multiFactor || !state.multiFactor.user ? (
            ""
          ) : (
            <>
              <div className="wallet">

                <div className="wallet-container">
                  <span
                    style={{ cursor: "pointer" }}
                    className="material-symbols-outlined"
                  >
                    person
                  </span>{" "}
                </div>
              </div>
            </>
          )} */}


          {!state &&
            (
              <>
                <a href="/" style={path === '/' ? { color: '#396DFB' } : { color: 'black' }}>Home</a>
                <a href="/#contact" style={path === '/contact' ? { color: '#396DFB' } : { color: 'black' }}>Contact</a>
                <div className="loginbuttons">

                  <button onClick={() => navigate("/login")}>Login</button>
                </div>

              </>
            )}
          {state && (
            <>
              <a href="/" style={path === '/' ? { color: '#396DFB' } : { color: 'black' }}>Home</a>
              <a href="/#contact" style={path === '/contact' ? { color: '#396DFB' } : { color: 'black' }}>Contact</a>
              <a href="/#stocks" style={path === '/stocks' ? { color: '#396DFB' } : { color: 'black' }}>Discover</a>
              <a href="/#investment" style={path === '/investment' ? { color: '#396DFB' } : { color: 'black' }}>Investment</a>
              <a href="/#wallet" style={path === '/wallet' ? { color: '#396DFB' } : { color: 'black' }}>Wallet</a>
              <a href="/#complete-profile" style={path === '/complete-profile' ? { color: '#396DFB' } : { color: 'black' }}>Complete Profile</a>
              <a href="/#complete-kyc" style={path === '/complete-kyc' ? { color: '#396DFB' } : { color: 'black' }}>Complete KYC</a>
              <div className="loginbuttons">

                <button className="nav2button" onClick={function () { navigate('/wallet') }}><img src="/AGOI/wallet.svg" /></button>
                <button className="nav2button"><img src="/AGOI/notification.svg" /></button>
                <button className="nav2button"><img src="/AGOI/usericon.svg" /></button>
                <button className="nav2button" onClick={signoutHandler}><img src="/AGOI/exit.svg" /></button>
              </div>
            </>
          )}
        </div>
      </div>


    </>
  );
};

export default Nav;




