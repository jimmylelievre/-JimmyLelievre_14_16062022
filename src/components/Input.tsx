import React from "react";

type Props = {
  name: string;
  type: string;
  role: string;

  setValue: (value: string) => void;
};

const Input = ({ name, type, role, setValue }: Props) => {
  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input
        role={role}
        type={type}
        id={name}
        required
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
