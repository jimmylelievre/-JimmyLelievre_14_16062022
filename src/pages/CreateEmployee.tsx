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
      <form>
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
          role="date-time-picker"
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
            role="state"
            label="State"
            options={stateList}
            setValue={(value: string) => dispatch(setState(value))}
          />
          <Input
            name="Zip Code"
            type="number"
            role="zipcode-input"
            setValue={(value: string) => dispatch(setZipCode(value))}
          />
        </div>
        <h3>Company Informations</h3>
        <div className="flex">
          <DateTimePicker
            role="start-date"
            label="Start Date"
            setValue={(value: string) => dispatch(setStartDay(value))}
          />
          <Select
            label="Department"
            role="department"
            options={departmentList}
            setValue={(value: string) => dispatch(setDepartment(value))}
          />
        </div>
        <button
          type="submit"
          className="button"
          data-testid="button-create-employee"
          onClick={() => {
            submitEmployee();
            setModalIsOpen(true);
          }}
        >
          <p>Create an employee</p>
        </button>
      </form>
      <Modal
        role="button-create-employee"
        isOpen={modalIsOpen}
        onConfirm={toggleModal}
      />
    </div>
  );
};

export default CreateEmployee;
