// function UsersView(props) {
//   //props: users (filteredUsers)
//   //button to filter by name
//   //onClick => this.sortUsers
//   return <div>{props}</div>
// }

import React from "react";
import API from "../utils/API";

class UsersView extends React.Component {
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
                        name: employeeInfo[i].name.first + " " + employeeInfo[i].name.last
                    }
                }
            });
    }

    render() {
        return (
            <div>Hi!</div>
        )
    }
}

export default UsersView;