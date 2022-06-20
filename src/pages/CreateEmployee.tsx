import Input from "../components/Input";
import Select from "../components/Select";

const CreateEmployee = () => {
  return (
    <div className="create-employee">
      <h2>Create employee</h2>
      <h3>Personal informations</h3>
      <div className="flex">
        <Input name="First Name" type="text" />
        <Input name="Last Name" type="text" />
      </div>
      <Input name="Date of Birth" type="date" />
      <h3>Personal Adress</h3>
      <div className="flex">
        <Input name="Street" type="text" />
        <Input name="City" type="text" />
      </div>{" "}
      <div className="flex">
        <Select label="State" />
        <Input name="Zip Code" type="number" />
      </div>
      <h3>Company Informations</h3>
      <div className="flex">
        <Input name="Start Date" type="date" />
        <Select label="Department" />
      </div>
      <div className="button">
        <p>Create employee</p>
      </div>
    </div>
  );
};

export default CreateEmployee;
