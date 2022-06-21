import React from "react";
import { useDispatch } from "react-redux";
import { setFirstName } from "../slices/form.slice";

type Props = {
  name: string;
  type: string;
  setValue: (value: string) => void;
};

const Input = ({ name, type, setValue }: Props) => {
  const dispatch = useDispatch();
  /*   const firstName = useSelector((state: any) => state.form.firstName); */

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
