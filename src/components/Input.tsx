import React from "react";

type Props = {
  name: string;
  type: string;
  setValue: (value: string) => void;
};

const Input = ({ name, type, setValue }: Props) => {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required
      />
    </div>
  );
};

export default Input;
