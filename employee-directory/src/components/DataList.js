import React from "react";

function DataList(props) {
  return (
    <ul className="list-group">
      {props.employees.map(employee => (
        <li className="list-group-item" key={employee.id}>
          <DataTable employee={employee}/>
        </li>
      ))}
    </ul>
  );
}

export default DataList;