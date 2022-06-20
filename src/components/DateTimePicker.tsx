import React from "react";

type Props = {
  label: string;
};

const DateTimePicker = ({ label }: Props) => {
  const value = (e: any) => console.log(e.target.value);

  return (
    <div className="date">
      <p>{label}</p>
      <input id="datetimepicker" type="date" onChange={value} />
    </div>
  );
};

export default DateTimePicker;
