import React from "react";

const Table = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jimmy Lelievre</td>
            <td>24 mars 2001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
