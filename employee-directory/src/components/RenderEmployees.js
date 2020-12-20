import React from "react";

function RenderEmployees(props) {
    //render employees in a table
    return (
        <>
        {props.employees.map((employee, index) => {
            return (
                //create table head

                //create table body
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
                               Email: {employee.name.email}
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