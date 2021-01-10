import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
import Header from "../Header";
import API from "../../utils/API";
import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext"

//Set states of employees in directory, set state of headings for table columns
function DataArea() {
    const [userState, setUserState] = useState({
        employees: "",
        filteredEmployees: "",
        alphabetical: true,
        headings: [
            { name: "Image" },
            { name: "Name" },
            { name: "Phone" },
            { name: "Email" },
            { name: "DOB" }
        ]
    });


    //handlsort function, changes the order to the opposite of its current state 

    //order function
    sortEmployees = () => {
        console.log("here");
        let sortedEmployees = [];
        if (userState.alphabetical === true) {
            sortedEmployees = userState.employees.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1
                return 0;
            })
        } else {
            sortedEmployees = userState.employees.sort((a, b) => {
                let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return 1
                if (nameA > nameB)
                    return -1
                return 0;
            })
        }
        console.log(sortedEmployees)
        setUserState({
            ...userState,
            alphabetical: !this.state.alphabetical,
            filteredUsers: sortedEmployees
        });
    };

    //handleInputChange
    //setEmployeeState
    handleInputChange = event => {
        const searchTerm = event.target.value;
        const searchedEmployees = userState.employees.filter(employee => {
            let item = employee.name.first + employee.name.last + employee.email + employee.cell + employee.dob.age;
            return item.indexOf(searchTerm) !== -1;
        })

        setUserState({
            ...userState,
            filteredEmployees: searchedEmployees
        });
    }

    //useEffect, getUsers and set users state and filteredUsers state
    useEffect(() => {
        API.getUsers().then(results => {
            setUserState({
                ...userState,
                employees: results.data.results,
                filteredEmployees: results.data.results
            })
        });
    });


    //retrun dataareacontext.provider with values to pass to the datatable
    return (
        <DataAreaContext.Provider value={{ userState, handleInputChange, sortEmployees }}>
            <Header />
            <div>
                {userState.filteredEmployees.length > 0 ? <DataTable /> : <div>No Employees</div>}
            </div>
        </DataAreaContext.Provider>
    )

}

export default DataArea;