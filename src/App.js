import React from "react";
import API from "./utils/API";
import Header from "./components/Header";
import Main from "./components/Main";
import UsersView from "./components/UsersView";
import FormInput from "./components/FormInput";
import Sort from "./components/Sort";

import "./App.css";


class App extends React.Component {
  // state = {
  //   allUsers: [],
  //   filteredUsers: [],
  //   search: "",
  //   alphabetical: true
  // }

  // componentDidMount() {
  //   API.getUsers().then(employees => {
  //     this.setState({
  //       allUsers: employees.data.results,
  //       filteredUsers: employees.data.results
  //     });
  //   });
  // }


  // handleInputChange = event => {
  //   this.setState({
  //     search: event.target.value
  //   });
  //   let searchedUser = event.target.value;
  //   const searchedUsers = this.state.allUsers.filter(user => {
  //     let data = user.name.first + user.name.last + user.email + user.cell + user.dob.age;
  //     return data.indexOf(searchedUser) !== -1;
  //   });
  //   this.setState({
  //     filteredUsers: searchedUsers
  //   })
  // }

  
  // sortEmployees = () => {
  //   console.log("here");
  //   let sortedEmployees = [];
  //   console.log(sortedEmployees)
  //   if (this.state.alphabetical) {
  //     sortedEmployees = this.state.allUsers.sort((a, b) => {
  //       let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
  //       if (nameA < nameB)
  //         return -1;
  //       if (nameA > nameB)
  //         return 1
  //       return 0;
  //     })
  //   } else {
  //     sortedEmployees = this.state.allUsers.sort((a, b) => {
  //       let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
  //       if (nameA < nameB)
  //         return 1
  //       if (nameA > nameB)
  //         return -1
  //       return 0;
  //     })
  //   }
  //     console.log(sortedEmployees)
  //     this.setState({
  //       alphabetical: !this.state.alphabetical,
  //       filteredUsers: sortedEmployees
  //     })
  // }


  render() {
    return (
      <div className="App">

        <Header />
        <Main />
        {/* <FormInput
          handleInputChange={this.handleInputChange}
        />
        <Sort sortEmployees={this.sortEmployees} />
        <UsersView employees={this.state.filteredUsers} /> */}

      </div>

    )
  };
}

export default App;
