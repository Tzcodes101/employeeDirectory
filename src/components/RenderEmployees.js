import React from "react";


function RenderEmployees(props) {
   
    return (

        <div className="data-table">
            <table id="table">
                <thead>
                    <tr>
                        <th className="col">Image</th>
                        <th className="col">Name</th>
                        <th className="col">Email</th>
                        <th className="col">Phone</th>
                        <th className="col">DOB</th>
                    </tr>
                </thead>

                <tbody>

                    {props.employees.map((employee, index) => {
                        return (
                            <tr key={index}>
                                <td className="img-container">
                                    <img alt={employee.name.first} src={employee.picture.medium} />
                                </td>
                                <td className="employee-name">
                                    {employee.name.first} {employee.name.last}
                                </td>
                                <td className="email">
                                    {employee.email}
                                </td>
                                <td className="phone">
                                    {employee.cell}
                                </td>
                                <td className="DOB">
                                    {employee.dob.age}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )

}


export default RenderEmployees;