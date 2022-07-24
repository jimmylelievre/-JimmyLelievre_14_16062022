import { createSlice } from "@reduxjs/toolkit";

export const employeesList = createSlice({
  name: "employees List",
  initialState: {
    employeesList: JSON.parse(localStorage.getItem("employees") || "[]"),
  },
  reducers: {
    setEmployeesList: (state, { payload }) => {
      state.employeesList = payload;
    },
  },
});

export default employeesList.reducer;
export const { setEmployeesList } = employeesList.actions;
