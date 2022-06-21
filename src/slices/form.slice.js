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
    setFirstName: (state, { payload }) => {
      state.firstName = payload;
    },
    setLastName: (state, { payload }) => {
      state.lastName = payload;
    },
    setDateOfBirth: (state, { payload }) => {
      state.dateOfBirth = payload;
    },
    setState: (state, { payload }) => {
      state.state = payload;
    },
    setDepartment: (state, { payload }) => {
      state.department = payload;
    },
    setStartDay: (state, { payload }) => {
      state.startDay = payload;
    },
    setStreet: (state, { payload }) => {
      state.street = payload;
    },
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    setZipCode: (state, { payload }) => {
      state.zipCode = payload;
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
