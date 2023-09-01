// import React from 'react'
// import Nav from "../Home/Nav/Nav";
// import "../../Components/Notify/Notify.css";
// import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { BASE_URL } from "../../Constants/api_constants";
// import { useEffect, useState } from "react";
// import moment from "moment";
// import userEvent from "@testing-library/user-event";
// import Ping from './Ping';
// import { hydrate } from 'react-dom';
// import { fontSize } from '@mui/system';
// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";



// const Notify = () => {

  
//   let [modalItems, setModalItems] = useState();
//   const [count, setcount] = useState([])
//   let state = useSelector((state) => state);
//   let [open, setOpen] = useState(false);
  
  
  
  
//   const [notification, setNotification] = useState([])
//   const [user, setUser] = useState([])
//   const  [check, setCheck] = useState(false);

//     let handleOpens = (item) => {
//         setModalItems(item);
//         setOpen(true);
//         setCheck();
//       };

//     // var setCheck = () => {
//     //  return  user.notification.length-1
//     // };
    
      
//   let handleClose = () => {
//     setOpen(false);
//   };
      
      
//     let fetchnotify = async () => {
//         // handleClose();
//         if (state) {
//             let data = await axios.get(
//                 `${BASE_URL}/user/${state._id}`
//             );

//             if (data && data.data && data.data.data) {
//                 let response = data.data.data;
//                 console.log(response);
//                 setNotification(response);
//                 setUser(response);
//             }
//         }
//     };



//     useEffect(() => {
//         fetchnotify();
//         // console.log(user.notification.length);
        
//     }, [state]);


    
//     return (
//         <>
//         <Ping
//         handleClose={handleClose}
//         item={modalItems}   
//         open={open}   
//         fetchnotify={fetchnotify}
//         count={count}
//     />


  
   
//         <div className="table-containers">
//           <table className="table">
//             <thead>
//               <tr>
 
//                <div className="investment-item d-flex flex-column">
//              <span style={{ fontSize:"24px" }}>
//              Notifications

//              </span>
        
//            </div>
//               </tr>
//             </thead>

//             {/* {check && } */}
      
//             {
//                 notification.
//                     length &&
//                    notification.
//                         length === 0 ? (
//                     "No New Notification"
//                 ) : (
//                     <tbody>
//                         {
//                             notification.notification
//                             &&
//                             notification.notification
//                                 .map((e, index) => {

//                                     return (
//                                         <>
                                    
//                                             <tr key={index}>
                                     
//                                             <div className="we">
            
                          
                                               
                                              
//                                             <td onClick={() => {handleOpens(setcount(e.message))}}>{e.message}</td> 
          


                                               
//                                                </div>
                                       
//                                                </tr>
                          
                                            
//                                         </>
//                                     );
//                                 })}
//                     </tbody>
//                 )}

// </table>
                
                 
              
    
//       </div>


      

// </>


//     )
// }

// export default Notify
























