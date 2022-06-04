import React from "react";

import "./modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Təklif et</h6>
        <p className="text-center text-light">
          Minimum təklif <span className="money">5.89 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="input__item mb-3">
          <h6>Say daxil edin, 7 mövcud</h6>
          <input type="number" placeholder="Say daxil edin" />
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Minimum təklif</p>
          <span className="money">5.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Xidmət Haqqı</p>
          <span className="money">0.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Yekun Təklif</p>
          <span className="money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn">Təklif et</button>
      </div>
    </div>
  );
};

export default Modal;
