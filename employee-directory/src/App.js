import React, { Component } from "react";
import API from "./utils/API";
import Main from "./components/Main";

function FormInput() {
  return <div>form input</div>
}

function UsersView() {
  //props: users (filteredUsers)
  //button to filter by name
    //onClick => this.sortUsers
  return <div>users view</div>
}

class App extends Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    searchTerm: ""
  }

  //compnentDidMount
    //call API from utils
      //setState
        //allUsers: [],
        //filteredUsers: []

  //handleInputChange
    //change(setState) searchTerm
    //filter users based on searchTerm
    //sort if relevant

  //sortUsers
    //using js sort (by string, or number (DOB))

  render () {
  return (
    <div className="App">
      <Main />
    </div>
    
  )};
}

export default App;
