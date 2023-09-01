import { Modal } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BASE_URL } from "../../../Constants/api_constants";

let ReferralCardModal = ({ handleClose, open }) => {
  let [contact, setContact] = useState("");
  let state = useSelector((state) => state);
  let { addToast } = useToasts();
  let postReferral = async () => {
    try {
      let data = await axios.post(BASE_URL + "/referral/refer-user", {
        contact_no: `+91${contact}`,
        referred_by: state._id,
        refer_amount: 100,
      });
      console.log(data.data);
      if (data.data && data.data.data) {
        addToast("referral has been generated", {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast(data.data.message, { appearance: "error", autoDismiss: true });
      }
    } catch (e) {
      console.log(e);
      addToast("error occurred", { appearance: "error", autoDismiss: true });
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="refer-card-modal">
          <h2>Add Referral Details</h2>
          <div className="row">
            <div className="col-12">
              <label htmlFor="">Enter Referral Number*</label>
              <input
                type="text"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                // disabled={user.pan_card_number ? true : false}
                // defaultValue={user.pan_card_number}
                placeholder="Enter Referral Number"
              />
            </div>
            <div className="submit-btn-container">
              <div onClick={postReferral} className="btn btn-primary">
                Submit
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReferralCardModal;
