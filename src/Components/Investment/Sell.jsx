 import { Modal } from "@mui/material";
 import axios from "axios";
 import { useEffect } from "react";
 import { useState } from "react";
 import { useSelector } from "react-redux";
 import { useToasts } from "react-toast-notifications";
 import { BASE_URL } from "../../Constants/api_constants";
 import "../../styles/Investment/SellStockModal.css";

 let Sell = ({ handleClose, open, fetchuser, walletBalance }) => {
   let [qty, setQty] = useState(0);
   let state = useSelector((state) => state);
  //  console.log(state);
   
   let [max, setMax] = useState(0);
   let { addToast } = useToasts();

   let [amount, setAmount] = useState(0);

   
   let postwalletbalance = async () => {
     try {
       let data = await axios.post(BASE_URL + '/user/cashout', {

        // stocks_qty_to_be_sold: qty,
        cashout_amount:qty ,
         user_id: state._id,
       });
      //  console.log(data.data);
       if (data.data && data.data.data) {
         addToast("sell request has been created", {
           appearance: "success",
           autoDismiss: true,
         });
         fetchuser();
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
        (walletBalance - e.target.value).toPrecision(4)
      );
      setQty(e.target.value);
    }   

      //  setCamount({Camount,[e.target.type]: e.target.value });

    // if (e.target.value <= max) {
    
  
    
  }   






   useEffect(() => {
     if(walletBalance){
       setQty(walletBalance === 0 ? 0 : 0);
      //  let pps = .stock_id.price_per_lot / .stock_id.share_per_lot;    
      //  setPricePerShare(pps);
       setAmount();
       setMax(walletBalance)
     }
     
   }, [walletBalance]);
   return (
     <>
       <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <div className="sell-card-modal">
           <h2>Cashout</h2>
           <div className="row">
             <div className="col-12">
            
               <label htmlFor="">Cashout Amount*</label>
               <input
                 type="number"
                 max={max}
                 min={max === 0 ? 0 : 1}
                 value={qty}
                 onChange={onChange}
                 // disabled={user.pan_card_number ? true : false}
                 // defaultValue={user.pan_card_number}
                 placeholder="Enter Referral Number"
               />
             </div>
             <p className="av-stock">Available Balance : {walletBalance} 
       </p>
             <p className = "av-stock">Remaining  Balance : {amount}</p>
             <div className = "submit-btn-container">
               <div onClick={postwalletbalance}  className ="btn btn-primary">
                 Submit
               </div>
             </div>
           </div>
         </div>
       </Modal>
     </>
   );
 };

 export default Sell;












// import { Modal } from "@mui/material";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useToasts } from "react-toast-notifications";
// import { BASE_URL } from "../../Constants/api_constants";
// import "../../styles/Investment/SellStockModal.css";


// let Sell = ({ handleClose, open, fetchuser,, walletBalance }) => {
//   let [qty, setQty] = useState(0);
  
//   let [amount, setAmount] = useState(0);
//   let state = useSelector((state) => state);
  
//   let [max, setMax] = useState(0);

//   let { addToast } = useToasts();
  
//   let [price_per_share, setPricePerShare] = useState(0);
  
//   let postSellStock = async () => {
//     try {
//       let data = await axios.post(BASE_URL + "/stock/sell-stock", {
//         order_id: ._id,
//         stocks_qty_to_be_sold: qty,
//         total_amount: amount,
//         user_id: state._id,
//       });
//       console.log(data.data);
//       if (data.data && data.data.data) {
//         addToast("sell request has been created", {
//           appearance: "success",
//           autoDismiss: true,
//         });
//         fetchuser();
//       } else {
//         addToast(data.data.message, { appearance: "error", autoDismiss: true });
//       }
//     } catch (e) {
//       console.log(e);
//       addToast("error occurred", { appearance: "error", autoDismiss: true });
//     }
//   };



//   const onChange = (e) => {

//     if (e.target.value <= max) {
//       setAmount(
//         (e.target.value * price_per_share).toPrecision(4)
//       );
//       setQty(e.target.value);
//     }   
//     // setCamount({Camount,[e.target.type]: e.target.value });
   
// };

  

//   useEffect(() => {
//     if () {
//        setQty(walletBalance === 0 ? 0 : 1);
//       //  let pps = .stock_id.price_per_lot / .stock_id.share_per_lot;
//        let pps = walletBalance ;

//        setPricePerShare(pps);
//        setAmount(pps);
//       setMax(walletBalance);
//       // console.log(left_sh)
//     }
    
//   }, []);


    
//   return (
//     <>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <div className="sell-card-modal">
//           <h2>Cashout</h2>
//           <div className="row">
//             <div className="col-12">              
//               <label htmlFor="">Cashout Amount*</label>
//               <input
//                 type="number"
//                 max={max}
//                 min={max === 0 ? 0 : 1}
//                 value={qty}
//                 // max={!state ? ( "hello" ) : (
//                 //   <>          
//                 //      {state.wallet_balance}                             
//                 //   </>)}    
//                 // min={max === 0 ? 0 : 1}
//                 // value={qty}
//                 onChange={onChange}
                           
//                 placeholder="Enter Referral Number"/> 
//             </div>
//             {/* <p className="av-stock">Available Balance :  {!state || !state.multiFactor || !state.multiFactor.user ? (  // ager state nai  hai toh hello print karna warna resorce and wallet print karna
//             "hello"
//         ) : (
//           <>          
//            {state.wallet_balance}                             
//           </>
//        )}</p>               */}
//        {/* <p>Available something :<>{state.left_shares}</></p> */}

//       <p className="av-stock">Available Balance :{ walletBalance}</p>
//             <p className="av-stock">Remaining  Balance : {max} </p>
//             <div className="submit-btn-container">
//               <div onClick={postSellStock} className="btn btn-primary">
//                 Submit
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Sell;
