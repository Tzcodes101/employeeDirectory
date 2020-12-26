import React from "react";


function RenderEmployees(props) {
    //render employees in a table
//   function sortEmployees(e) {
//   console.log("clicked")
//   //if not alphabetical (state) to true, then make alphabetical, if not true, do not make alph.
//   let sortedEmployees = [];
//   let alphabetical = true;
//   if (alphabetical) {
//     sortedEmployees = props.employees.sort((a, b) => {
//       let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
//       if (nameA < nameB) 
//         return -1;
//       if (nameA > nameB)
//         return 1
//       return 0;
//     })
//   } else {
//     sortedEmployees = props.employees.sort((a, b) => {
//       let nameA = a.name.las.toLowerCase(), nameB = b.name.last.toLowerCase();
//       if (nameA < nameB)
//         return 1
//       if (nameA > nameB)
//         return -1
//       return 0
//     })
//   console.log(sortedEmployees)
//     // this.setState({
//     //   alphabetical: !this.state.alphabetical,
//     //   filteredEmployees: sortedEmployees
//     // })
//   }
// }
   
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