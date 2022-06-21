import { cleanup, render, screen } from "@testing-library/react";
import Input from "../components/Input";
import { Provider } from "react-redux";
import { store } from "../app/store";

afterEach(() => {
  cleanup();
});

test("Input is here", () => {
  render(
    <Provider store={store}>
      <Input name="First Name" type="text" />
    </Provider>
  );
  const title = screen.getByText("First Name");
  expect(title).toBeInTheDocument();
});
