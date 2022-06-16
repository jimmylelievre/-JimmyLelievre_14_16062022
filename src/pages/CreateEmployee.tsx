import Input from "../components/Input";

const CreateEmployee = () => {
  return (
    <div className="create-employee">
      <h2>Create employee</h2>
      <h3>Personal informations</h3>
      <div className="flex">
        <Input name="First Name" />
        <Input name="Last Name" />
      </div>
      <Input name="Date of Birth" />
      <h3>Personal Adress</h3>
      <div className="flex">
        <Input name="First Name" />
        <Input name="Last Name" />
      </div>{" "}
      <div className="flex">
        <Input name="First Name" />
        <Input name="Last Name" />
      </div>
      <h3>Company Informations</h3>
      <div className="flex">
        <Input name="First Name" />
        <Input name="Last Name" />
      </div>
      <div className="button">
        <p>Create employee</p>
      </div>
    </div>
  );
};

export default CreateEmployee;
