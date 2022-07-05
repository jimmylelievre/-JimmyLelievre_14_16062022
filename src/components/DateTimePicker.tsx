import React from "react";

type Props = {
  label: string;
  role: string;
  setValue: (value: string) => void;
};

const DateTimePicker = ({ label, role, setValue }: Props) => {
  return (
    <div className="date">
      <p>{label}</p>
      <input
        role={role}
        id="datetimepicker"
        type="date"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default DateTimePicker;
