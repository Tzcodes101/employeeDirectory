import React, { Component } from 'react';
import "./App.css";
import API from "./utils/API";

class Main extends Component {
    state = {
        allUsers: [],
        filteredUsers: [],
        searchTerm: ""
      }

    //when this component mounts, search for all employees from API in utils
      //setState
        //allUsers: []
        //filteredUsers: []

    //searchAPI

    //handleInput change (filter employees )
        //change(setState) searchTerm
        //filter users based on searchTerm
        //sort if relevant

    //sortUsers
        //using js sort (by string, or number (DOB))

    //handleFormSubmit
      //prevent default
      //this.state.search for searchAPI

    render () {
        return (
            <div>{this.state.result}</div>
        )
    }
}

export default Main;