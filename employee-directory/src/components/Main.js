import React, { Component } from 'react';
import API from "../utils/API";

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
    componentDidMount() {
        this.searchAPI("Bryant");
    }

    //searchAPI
    searchAPI = query => {
        API.getUsers(query)
            .then(res => this.setState({ allUsers: res.data }))
            .catch(err => console.log(err));
    }


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
            <div>{this.state.allUsers}</div>
        )
    }
}

export default Main;