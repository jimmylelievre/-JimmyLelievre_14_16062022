import { departmentList } from "../assets/data/departmentList";
import { stateList } from "../assets/data/StateList";
import DateTimePicker from "../components/DateTimePicker";
import Input from "../components/Input";
import Select from "../components/Select";
import { setDepartment, setState } from "../slices/form.slice";

import { useDispatch } from "react-redux";

const CreateEmployee = () => {
  const dispatch = useDispatch();

  return (
    <div className="create-employee">
      <h2>Create employee</h2>
      <h3>Personal informations</h3>
      <div className="flex">
        <Input name="First Name" type="text" />
        <Input name="Last Name" type="text" />
      </div>
      <DateTimePicker label="Date of Birth" />
      <h3>Personal Adress</h3>
      <div className="flex">
        <Input name="Street" type="text" />
        <Input name="City" type="text" />
      </div>{" "}
      <div className="flex">
        <Select
          label="State"
          options={stateList}
          setValue={(value: string) => dispatch(setState(value))}
        />
        <Input name="Zip Code" type="number" />
      </div>
      <h3>Company Informations</h3>
      <div className="flex">
        <DateTimePicker label="Start Date" />
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
