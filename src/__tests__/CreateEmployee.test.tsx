import { cleanup, render, screen } from "@testing-library/react";
import Input from "../components/Input";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { setFirstName } from "../slices/form.slice";
import App from "../App";

afterEach(() => {
  cleanup();
});

describe("Given I am on the create employee page", () => {
  test("Then i should see the form", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const firstName = screen.getByText("First Name");
    const lastName = screen.getByText("Last Name");
    const dateOfBirth = screen.getByText("Date of Birth");
    const street = screen.getByText("Street");
    const city = screen.getByText("City");
    const state = screen.getByText("State");
    const zipCode = screen.getByText("Zip Code");
    const startDate = screen.getByText("Start Date");
    const department = screen.getByText("Department");
    const button = screen.getByText("Create an employee");

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(dateOfBirth).toBeInTheDocument();
    expect(street).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zipCode).toBeInTheDocument();
    expect(startDate).toBeInTheDocument();
    expect(department).toBeInTheDocument();
    expect(button).toBeTruthy();
  });
  /* test("Then I should see a button", () => {
    const button = render(
      <div className="button">
        <p>Create employee</p>
      </div>
    );
    expect(button).toBeCalled();
  }); */
});
