import { Modal } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BASE_URL } from "../../Constants/api_constants";
import "../../../src/styles/Investment/Investment.css";

let Ping = ({ handleCloses, open,counts,fetchuser}) => {
 



   
 


  return (
    <>
       <Modal
         open={open}
         onClose={handleCloses}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >

         <div  className="sell-card-modals">
           
      
            <tbody>
            
           <h2 >Notification <hr/></h2>
             
       

           <h5 style={{ paddingBottom:"63px" }}>{counts}</h5>
        
         

                    </tbody>


    

         </div>
       </Modal>
    </>
  );
};

export default Ping;














// import { Modal } from "@mui/material";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useToasts } from "react-toast-notifications";
// import { BASE_URL } from "../../Constants/api_constants";
// import "../../../src/styles/Investment/Investment.css";

// let Ping = ({ handleClose, open,count}) => {
//   let [qty, setQty] = useState(0);
//   let state = useSelector((state) => state);
//  //  console.log(state);
//  const [notification, setNotification] = useState([])
  
//   let [max, setMax] = useState(0);
//   let { addToast } = useToasts();

//   let [amount, setAmount] = useState(0);

//   let fetchnotify = async () => {
//     // handleClose();
//     if (state) {
//         let data = await axios.get(
//             `${BASE_URL}/user/${state._id}`
//         );

//         if (data && data.data && data.data.data) {
//             let response = data.data.data;
//             console.log(response);
//             setNotification(response);
//         }
//     }
// };
   

//      //  setCamount({Camount,[e.target.type]: e.target.value });

//    // if (e.target.value <= max) {
   
//     useEffect(() => {
//         fetchnotify();
//     }, [state,count]);
   
 


//   return (
//     <>
//        <Modal
//          open={open}
//          onClose={handleClose}
//          aria-labelledby="modal-modal-title"
//          aria-describedby="modal-modal-description"
//        >
//          <div className="sell-card-modal">
           

//             {/* { notification.notification.message} */}


      
           
//             <tbody>
//                         {/* {
//                             notification.notification
//                             &&
//                             notification.notification
//                                 .map((e, index) => {

//                                     return (
//                                         <>
                                     
//                                             <tr>
                                 
                                       
//                                          <div
                   
//                       className="we" 
//                     >
//                                                <td>{count}</td> 
                                          
//                                        </div>
//                                             </tr>
                          
                                            
//                                         </>
//                                     );
//                                 })} */}
//                                       {/* <div className="investment-item d-flex flex-column"> */}



                                      
//    <span style={{ fontSize:"34px" }}>
//              Notifications

//              </span>
            

//            <td>{count}</td> 
//                     </tbody>


    

//          </div>
//        </Modal>
//     </>
//   );
// };

// export default Ping;