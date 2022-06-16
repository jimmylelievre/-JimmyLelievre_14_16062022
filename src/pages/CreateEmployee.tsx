import React from "react";
import Input from "../components/Input";

const CreateEmployee = () => {
  return (
    <div className="create-employee">
      <h2>Create employee</h2>
      <h3>Personal informations</h3>
      <Input name="First Name" />
    </div>
  );
};

export default CreateEmployee;
