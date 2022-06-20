import React from "react";

type Props = {
  name: string;
  type: string;
};

const Input = ({ name, type }: Props) => {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} required />
    </div>
  );
};

export default Input;
