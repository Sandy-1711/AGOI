import Nav from "../Home/Nav/Nav";
import "../../styles/Investment/Investment.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../Constants/api_constants";
import { useEffect, useState } from "react";
import moment from "moment";
import userEvent from "@testing-library/user-event";
// import generatePDF from "./repGenerator";
// import SellStocksModal from "./SellStocksModal";





let Cashouthistory = () => {
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  let [open, setOpen] = useState(false);
  let [modalItem, setModalItem] = useState();
  // let [order, setOrder] = useState([]);
  const [cashout, setCashout] = useState([])
  const [user, setUser] = useState([])

  let fetchcash = async () => {
    // handleClose();
    if (state) {
      // let data = await axios.get(
      //   `${BASE_URL}/user/${state._id
      //   }`
      // );


      let data = await axios.get(
        `${BASE_URL}/user/${state._id}`
      );


      // console.log(state)

      if (data && data.data && data.data.data) {
        let response = data.data.data;
        console.log(response);
        setCashout(response);
      }
    }
  };


    



  let handleOpen = (item) => {
    setModalItem(item);
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchcash();
    
  }, [state]);
  return (





   
    <>   
     <Nav />
            
      <div className="investment-heading">
                <h3>Browse Investments</h3>
                <div className="investment-chart d-flex justify-content-around align-items-center">
                  <div className="investment-item d-flex flex-column">
                    <span style={{ color: "var(--color-light-grey)" }}>
                      Total Investment
                      {/* <li key="{item}">{item}</li> */}
                      {/* <p>{cashout && cashout.length}</p> */}
                      <p style={{ color: "var(--white-font)" }}>{cashout && cashout.length}</p>
                    </span>
                 
                  </div>
             
                </div>
              </div>
              <div className="investment-table">
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Cashout date</th>
                        <th scope="col">Cashout amount</th>
                        {/* <th className="col">Current Holding</th> */}
                        <th scope="col">Status</th>
                      
                      </tr>
                    </thead>


           {cashout.length && cashout.length === 1 ? (
              ""
            ) : (
              <tbody>
                {cashout.cashout && cashout.cashout.map((e,idx) => {
                
                  return (
                    <>  
                      <tr key={idx + 6}>
                        <td>{moment(e.createdAt).format('DD MMM YYYY hh:mm A')}</td>                       
                        <td>{e.cashout_amount}</td>
                        <td>{e.cashout_status ? "Approve" : "Reject"}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
             )} 
                   
                 
                  </table>
                
                   
              
                </div>
              </div>
            
            </>
          );
        };



export default Cashouthistory;



