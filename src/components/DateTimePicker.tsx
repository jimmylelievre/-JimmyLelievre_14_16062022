import React from "react";

type Props = {
  label: string;
  setValue: (value: string) => void;
};

const DateTimePicker = ({ label, setValue }: Props) => {
  return (
    <div className="date">
      <p>{label}</p>
      <input
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
