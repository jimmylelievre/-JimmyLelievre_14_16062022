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
    setLastName: (state, action) => {
      state.lastName = action;
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
    setStartDay: (state, action) => {
      state.startDay = action;
    },
    setStreet: (state, action) => {
      state.street = action;
    },
    setCity: (state, action) => {
      state.city = action;
    },
    setZipCode: (state, action) => {
      state.zipCode = action;
    },
  },
});

export default formSlice.reducer;
export const {
  setFirstName,
  setDateOfBirth,
  setState,
  setDepartment,
  setStartDay,
  setLastName,
  setStreet,
  setCity,
  setZipCode,
} = formSlice.actions;
