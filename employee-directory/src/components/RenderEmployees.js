import React from "react";

function RenderEmployees(props) {
    //render employees in a table
    return (
    
        <>
         <div className="data-table">
                    <table id="table">
                        <tr>
                            <th className="col">Image</th>
                            <th className="col">Name</th>
                            <th className="col">Email</th>
                            <th className="col">Phone</th>
                            <th className="col">DOB</th>
                        </tr>
                    </table>
                </div>
            {props.employees.map((employee, index) => {
                return (
               <div key={index}>
                   <div className="img-container">
                       <img alt={employee.name.first} src={employee.picture.thumbnail}/>
                   </div>
                   <div className="info">
                       <ul style={{listStyleType: "none"}}>
                           <li>
                                    Name: {employee.name.first} {employee.name.last}
                           </li>
                           <li>
                                    Email: {employee.email}
                           </li>
                           <li>
                                    Phone: {employee.cell}
                           </li>
                       </ul>
                   </div>
               </div>
            
                )
            })}
        </>

    )
}

export default RenderEmployees;