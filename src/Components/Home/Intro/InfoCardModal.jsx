import { Modal } from "@mui/material";

let InfoCardModal = ({ handleClose, open }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="info-card-modal">
          <div className="clear-btn" onClick={handleClose}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="text-[#323340] text-3xl rotate-45"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path>
            </svg>
          </div>
          <h1>What are private markets?</h1>
          <p>
            These are markets where capital investment is made into leading
            private growth companies that are not publicly traded.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default InfoCardModal;
