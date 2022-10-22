import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    firstname: "",
    lastname: "",
    start: "",
    department: "Sales",
    birth: "",
    street: "",
    city: "",
    state: "Alabama",
    zipcode: "",
  },
  reducers: {
    setFirstName: (state, { payload }) => {
      state.firstname = payload;
    },
    setLastName: (state, { payload }) => {
      state.lastname = payload;
    },
    setDateOfBirth: (state, { payload }) => {
      state.birth = payload;
    },
    setState: (state, { payload }) => {
      state.state = payload;
    },
    setDepartment: (state, { payload }) => {
      state.department = payload;
    },
    setStartDay: (state, { payload }) => {
      state.start = payload;
    },
    setStreet: (state, { payload }) => {
      state.street = payload;
    },
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    setZipCode: (state, { payload }) => {
      state.zipcode = payload;
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
