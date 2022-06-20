import React from "react";

type Props = {
  label: string;
  options: string[] | { name: string; abbreviation: string }[];
};

const Select = ({ label, options }: Props) => {
  return (
    <div className="select">
      <p>{label}</p>
      <div className="box-select">
        <select>
          {options.map((option, id) => {
            const name = typeof option === "object" ? option.name : option;
            const value =
              typeof option === "object" ? option.abbreviation : option;
            return (
              <option key={id} value={value}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
