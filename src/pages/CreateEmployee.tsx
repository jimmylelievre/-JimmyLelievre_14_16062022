import { departmentList } from "../assets/data/departmentList";
import { stateList } from "../assets/data/StateList";
import DateTimePicker from "../components/DateTimePicker";
import Input from "../components/Input";
import Select from "../components/Select";
import { useDispatch } from "react-redux";
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

const CreateEmployee = () => {
  const dispatch = useDispatch();

  return (
    <div className="create-employee">
      <h2>Create employee</h2>
      <h3>Personal informations</h3>
      <div className="flex">
        <Input
          name="First Name"
          type="text"
          setValue={(value: string) => dispatch(setFirstName(value))}
        />
        <Input
          name="Last Name"
          type="text"
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
          setValue={(value: string) => dispatch(setStreet(value))}
        />
        <Input
          name="City"
          type="text"
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
      <div className="button">
        <p>Create employee</p>
      </div>
    </div>
  );
};

export default CreateEmployee;
