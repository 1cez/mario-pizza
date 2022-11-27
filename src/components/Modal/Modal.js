import { useState } from "react";
import "./_Modal.scss";

function Modal() {
  return (
    <>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Modal Header</h3>
            <span className="close-modal-btn">X</span>
          </div>
          <div className="modal-body">
            <p>Modal Body</p>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
