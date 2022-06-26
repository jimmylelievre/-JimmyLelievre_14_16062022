import React from "react";
import Clear from "./icons/Clear";

type Modal = {
  isOpen: boolean;
  onConfirm: React.MouseEventHandler<HTMLDivElement>;
};

const Modal = ({ isOpen, onConfirm }: Modal) => {
  return (
    <div>
      {isOpen ? (
        <div className="background-color">
          <div className="modal">
            <p>Employee successfully created</p>
            <div onClick={onConfirm}>
              <Clear />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
