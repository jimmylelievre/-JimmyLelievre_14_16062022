import { createSlice } from "@reduxjs/toolkit";

export const employeesList = createSlice({
  name: "employees List",
  initialState: {
    employeesList: [],
  },
  reducers: {
    setEmployeesList: (state, { payload }) => {
      state.employeesList = payload;
    },
  },
});

export default employeesList.reducer;
export const { setEmployeesList } = employeesList.actions;
