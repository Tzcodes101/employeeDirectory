//import context 

//DataBody
    //map over filtered users to put each use in their own row

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