import { DataTables } from "data-tables-plugin-hrnet";
import { useSelector } from "react-redux";

import { dataHeader } from "../dataMock";

const ShowEmployees = () => {
  const employeeList = useSelector(
    (state: any) => state.employeesList.employeesList
  );

  return (
    <div className="show-employees">
      <h2>Show Employees</h2>
      <DataTables dataHeader={dataHeader} tableItem={employeeList} />
    </div>
  );
};

export default ShowEmployees;
