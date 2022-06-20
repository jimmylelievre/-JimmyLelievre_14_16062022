import React from "react";

type Props = {
  label: string;
};

const Select = ({ label }: Props) => {
  return (
    <div className="select">
      <p>{label}</p>
      <div className="box-select">
        <select>
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
          <option value="Londres">Londres</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
