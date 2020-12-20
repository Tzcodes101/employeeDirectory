// function UsersView(props) {
//   //props: users (filteredUsers)
//   //button to filter by name
//   //onClick => this.sortUsers
//   return <div>{props}</div>
// }

import React from "react";
import API from "../utils/API";
import DataList from "./DataList";

class GetData extends React.Component {
    state = {
        allEmployeeInfo: []
    };

    componentDidMount = () => {
        API.getUsers()
            .then((results) => {
                let employeeInfo = results.data.results;
                let infoToPush = [];
                console.log(employeeInfo);
                for (let i = 0; i < employeeInfo.length; i++) {
                    let data = {
                        name: employeeInfo[i].name.first + " " + employeeInfo[i].name.last,
                        email: employeeInfo[i].email,
                        image: employeeInfo[i].picture.thumbnail,
                        phone: employeeInfo[i].cell,
                        dob: employeeInfo[i].dob.date
                    };
                    infoToPush.push(data);
                }
                console.log(infoToPush);
                this.setState({ allEmployeeInfo: infoToPush })  ; 
            });
            
    }
    

    render() {
        return (
            <div>
            <h1>Employee Directory</h1>
            <DataList employees={this.state.allEmployeeInfo} />
            </div>
        )
    }
}

export default GetData;