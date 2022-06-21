import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
    startDay: "",
    department: "Sales",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action;
    },
    setState: (state, action) => {
      state.state = action;
    },
    setDepartment: (state, action) => {
      state.department = action;
    },
  },
});

export default formSlice.reducer;
export const { setFirstName, setDateOfBirth, setState, setDepartment } =
  formSlice.actions;
