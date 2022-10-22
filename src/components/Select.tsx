import React from "react";

type Props = {
  label: string;
  role: string;
  options: string[] | { name: string; abbreviation: string }[];
  setValue: (value: string) => void;
};

const Select = ({ label, options, role, setValue }: Props) => {
  return (
    <div className="select-container">
      <p>{label}</p>
      <div className="box-select">
        <select
          className="width"
          required
          role={role}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {options.map((option, id) => {
            const name = typeof option === "object" ? option.name : option;

            return (
              <option key={id} value={name}>
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
