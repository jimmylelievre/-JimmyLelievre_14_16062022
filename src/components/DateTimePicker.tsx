import React from "react";

const DateTimePicker = () => {
  return (
    <div>
      <h3>DateTimepicker</h3>
      <p>
        <input id="datetimepicker" type="text" onChange={DateTimePicker} />
      </p>
    </div>
  );
};

export default DateTimePicker;
