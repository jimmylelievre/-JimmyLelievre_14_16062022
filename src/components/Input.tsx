import React from "react";
import { useDispatch } from "react-redux";
import { setFirstName } from "../slices/form.slice";

type Props = {
  name: string;
  type: string;
};

const Input = ({ name, type }: Props) => {
  const dispatch = useDispatch();
  /*   const firstName = useSelector((state: any) => state.form.firstName); */

  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        onChange={(e) => dispatch(setFirstName(e.target.value))}
        required
      />
    </div>
  );
};

export default Input;
