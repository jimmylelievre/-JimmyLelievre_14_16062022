import React from "react";

type Props = {
  name: string;
};

const Input = ({ name }: Props) => {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} required />
    </div>
  );
};

export default Input;
