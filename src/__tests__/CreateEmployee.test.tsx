import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "../App";

afterEach(() => {
  cleanup();
});

describe("When I am on the create employee page and I click on button create employee", () => {
  test("Then It should renders each components of form", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const firstName = screen.getByRole("firstName-input");
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
    expect(button).toBeInTheDocument();
  });
  test("Then I should enter my firstname", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const firstName = screen.getByRole("firstName-input") as HTMLInputElement;
    fireEvent.change(firstName, { target: { value: "toto" } });
    expect(firstName.value).toBe("toto");
  });
});
