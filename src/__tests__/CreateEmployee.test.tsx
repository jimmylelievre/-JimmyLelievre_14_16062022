import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "../App";
import ShowEmployees from "../pages/ShowEmployees";

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
  test("Then I should enter my lastname", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const lastName = screen.getByRole("lastName-input") as HTMLInputElement;
    fireEvent.change(lastName, { target: { value: "toto" } });
    expect(lastName.value).toBe("toto");
  });
  test("Then I should enter my street", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const street = screen.getByRole("street-input") as HTMLInputElement;
    fireEvent.change(street, { target: { value: "rue du code" } });
    expect(street.value).toBe("rue du code");
  });

  test("Then I should enter my city", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const city = screen.getByRole("city-input") as HTMLInputElement;
    fireEvent.change(city, { target: { value: "paris" } });
    expect(city.value).toBe("paris");
  });

  test("Then I should enter my zip code", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const zipCode = screen.getByRole("zipcode-input") as HTMLInputElement;
    fireEvent.change(zipCode, { target: { value: 42000 } });
    expect(zipCode.value).toBe("42000");
  });

  test("Then I should choose my date of birth", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const dateOfBirth = screen.getByRole(
      "date-time-picker"
    ) as HTMLInputElement;
    fireEvent.change(dateOfBirth, { target: { value: "2019-03-29" } });
    expect(dateOfBirth.value).toBe("2019-03-29");
  });

  test("Then I should choose my start date", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const startDate = screen.getByRole("start-date") as HTMLInputElement;
    fireEvent.change(startDate, { target: { value: "2019-03-29" } });
    expect(startDate.value).toBe("2019-03-29");
  });

  test("Then I should choose my state", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const state = screen.getByRole("state") as HTMLInputElement;
    expect(state).toHaveLength(59);
    fireEvent.change(state, { target: { value: "Arizona" } });
    expect(state.value).toBe("Arizona");
  });

  test("Then I should choose my department", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const department = screen.getByRole("department") as HTMLInputElement;
    expect(department).toHaveLength(5);
    fireEvent.change(department, { target: { value: "Marketing" } });
    expect(department.value).toBe("Marketing");
  });

  test("Then I should click on the submit button", () => {
    const submitEmployee = jest.fn();
    const setModalIsOpen = jest.fn();

    render(
      <div
        className="button"
        role="button-create-employee"
        onClick={() => {
          submitEmployee();
          setModalIsOpen(true);
        }}
      >
        <p>Create an employee</p>
      </div>
    );
    const button = screen.getByRole(
      "button-create-employee"
    ) as HTMLInputElement;
    fireEvent.click(button);
    expect(submitEmployee).toHaveBeenCalledTimes(1);
    expect(setModalIsOpen).toHaveBeenCalledTimes(1);
  });

  test("Then I should see the modal", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const modal = screen.getByTestId(
      "button-create-employee"
    ) as HTMLInputElement;

    expect(modal.textContent).toBe("Create an employee");
  });

  test("Then I should see the button navigation create employee", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const buttonCreateEmployee = screen.getByRole(
      "create-employee-navigation"
    ) as HTMLInputElement;

    expect(buttonCreateEmployee.textContent).toBe("Create employee");
  });

  test("Then I should see the button navigation show employees and when I click see the show employees page", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const buttonShowEmployee = screen.getByRole(
      "show-employees-navigation"
    ) as HTMLInputElement;

    expect(buttonShowEmployee.textContent).toBe("Show employees");
    fireEvent.click(buttonShowEmployee);
    await waitFor(() => screen.getByText("Show Employees"));
  });
});
