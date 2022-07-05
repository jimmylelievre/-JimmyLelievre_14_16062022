import React from "react";
import Clear from "./icons/Clear";

type Modal = {
  role: string;
  isOpen: boolean;
  onConfirm: React.MouseEventHandler<HTMLDivElement>;
};

const Modal = ({ role, isOpen, onConfirm }: Modal) => {
  return (
    <div>
      {isOpen ? (
        <div className="background-color">
          <div className="modal">
            <p>Employee successfully created</p>
            <div onClick={onConfirm} role={role}>
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
