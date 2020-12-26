import React from "react";
import API from "./utils/API";
import Header from "./components/Header";
import UsersView from "./components/UsersView";
import FormInput from "./components/FormInput";
import Sort from "./components/Sort";

import "./App.css";


class App extends React.Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    search: "",
    alphabetical: true
  }

  componentDidMount() {
    API.getUsers().then(employees => {
      this.setState({
        allUsers: employees.data.results,
        filteredUsers: employees.data.results
      });
    });
  }

  // searchAPI = query => {
  //   API.getUsers(query)
  //     .then(res => this.setState({ allUsers: res.data.results }))
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
    let searchedUser = event.target.value;
    const searchedUsers = this.state.allUsers.filter(user => {
      let data = user.name.first + user.name.last + user.email + user.cell + user.dob.age;
      return data.indexOf(searchedUser) !== -1;
    });
    this.setState({
      filteredUsers: searchedUsers
    })
  }


  // //when last name is clicked, want to sort alphabetically
  sortEmployees = () => {
    console.log("here");
    //if not alphabetical (state) to true, then make alphabetical, if not true, do not make alph.
    let sortedEmployees = [];
    console.log(sortedEmployees)
    if (this.state.alphabetical) {
      sortedEmployees = this.state.allUsers.sort((a, b) => {
        let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1
        return 0;
      })
    } else {
      sortedEmployees = this.state.allUsers.sort((a, b) => {
        let nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
        if (nameA < nameB)
          return 1
        if (nameA > nameB)
          return -1
        return 0;
      })
    }
      console.log(sortedEmployees)
      this.setState({
        alphabetical: !this.state.alphabetical,
        filteredUsers: sortedEmployees
      })
  }

  // renderSort = () => {
  //   console.log("clicked")
  //   if(this.state.filteredUsers.length > 0) {
  //     // return <Sort sort={this.sortEmployees} />
  //     this.sortEmployees(this.state.filteredUsers)
  //   }
  // }

 

  // //handleFormsubmit
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   console.log(event);
  //   console.log(event.target);
  //   // this.searchAPI(this.state.search)
  //   // API.getUsers(this.state.search);
  // };


  render() {
    return (
      <div className="App">

        <Header />
        <FormInput
          // search={this.state.search}
          // handleFormSubmit={this.handleFormSubmit} 
          handleInputChange={this.handleInputChange}
        />
        {/* <Sort sort={this.renderSort()} /> */}
        <Sort sortEmployees={this.sortEmployees} />
        <UsersView employees={this.state.filteredUsers} />

      </div>

    )
  };
}

export default App;
