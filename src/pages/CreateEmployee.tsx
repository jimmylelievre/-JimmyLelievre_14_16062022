import { departmentList } from "../assets/data/departmentList";
import { stateList } from "../assets/data/StateList";
import DateTimePicker from "../components/DateTimePicker";
import Input from "../components/Input";
import Select from "../components/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  setCity,
  setDateOfBirth,
  setDepartment,
  setFirstName,
  setLastName,
  setStartDay,
  setState,
  setStreet,
  setZipCode,
} from "../slices/form.slice";

import { setEmployeesList } from "../slices/employeesList.slice";
import Modal from "../components/Modal";
import { useState } from "react";

/* interface employee {
  dateOfBirth: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  startDay: number;
  department: string;
} */

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const newEmployee = useSelector((state: any) => state.form);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const submitEmployee = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));
    // permet de recupérer la liste des employées present dans le localstorage
    const employeesList = JSON.parse(localStorage.getItem("employees") || "[]");
    dispatch(setEmployeesList(employeesList));
  };

  return (
    <div className="create-employee">
      <h2>Create employee</h2>
      <h3>Personal informations</h3>
      <div className="flex">
        <Input
          name="First Name"
          type="text"
          role="firstName-input"
          setValue={(value: string) => dispatch(setFirstName(value))}
        />
        <Input
          name="Last Name"
          type="text"
          role="lastName-input"
          setValue={(value: string) => dispatch(setLastName(value))}
        />
      </div>
      <DateTimePicker
        label="Date of Birth"
        setValue={(value: string) => dispatch(setDateOfBirth(value))}
      />
      <h3>Personal Adress</h3>
      <div className="flex">
        <Input
          name="Street"
          type="text"
          role="street-input"
          setValue={(value: string) => dispatch(setStreet(value))}
        />
        <Input
          name="City"
          type="text"
          role="city-input"
          setValue={(value: string) => dispatch(setCity(value))}
        />
      </div>{" "}
      <div className="flex">
        <Select
          label="State"
          options={stateList}
          setValue={(value: string) => dispatch(setState(value))}
        />
        <Input
          name="Zip Code"
          type="number"
          role="number-input"
          setValue={(value: string) => dispatch(setZipCode(value))}
        />
      </div>
      <h3>Company Informations</h3>
      <div className="flex">
        <DateTimePicker
          label="Start Date"
          setValue={(value: string) => dispatch(setStartDay(value))}
        />
        <Select
          label="Department"
          options={departmentList}
          setValue={(value: string) => dispatch(setDepartment(value))}
        />
      </div>
      <div
        className="button"
        onClick={() => {
          submitEmployee();
          setModalIsOpen(true);
        }}
      >
        <p>Create an employee</p>
      </div>
      <Modal isOpen={modalIsOpen} onConfirm={toggleModal} />
    </div>
  );
};

export default CreateEmployee;
