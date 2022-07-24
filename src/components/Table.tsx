import React from "react";
import SearchBar from "./SearchBar";

const Table = () => {
  return (
    <div className="table">
      <SearchBar />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Adress</th>
            <th>Start Day</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Jimmy Lelievre</td>
            <td>24 mars 2001</td>
            <td>244, jaffray street</td>
            <td>January 13, 2003</td>
            <td>Sales</td>
          </tr>
          <tr>
            <td>Jimmy Lelievre</td>
            <td>24 mars 2001</td>
            <td>244, jaffray street</td>
            <td>January 13, 2003</td>
            <td>Sales</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
