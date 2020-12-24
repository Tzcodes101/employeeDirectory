import React from "react";
import API from "./utils/API";
import Header from "./components/Header";
import UsersView from "./components/UsersView";
import FormInput from "./components/FormInput";

import "./App.css";

// function UsersView() {
//   return <div>users view</div>
// }


// function FormInput() {
//   return <div>form input</div>
// }

class App extends React.Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    search: ""
  }

  //compnentDidMount
  //call API from utils
  //setState of allUsers to result
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
    const searchedUsers = this.state.filteredUsers.filter(user => {
      let data = user.name.first + user.name.last + user.email + user.cell + user.dob.age;
      return data.indexOf(searchedUser) !== -1;
    });
    this.setState({
      filteredUsers: searchedUsers
    })
  }


  //handleInputChange
  //name and value of input that will cause change
  //change(setState) searchTerm
  //filter users based on searchTerm
  //sort if relevant
  // handleInputChange = event => {
  //   let value = event.target.value;
  //   // const search = event.target.name;
  //   console.log(value);
  //   // console.log(search);
  //   // this.setState({
  //   //   search: value
  //   // });
  //   const users = (this.state.allUsers.filter(searchedUser => {
  //     const firstName = searchedUser.name.first;
  //     const stringFirstName = JSON.stringify(firstName)
  //     console.log(stringFirstName)
  //     return firstName.indexOf(value !== -1)
  //   })
  //   )
  //   this.setState({ filteredUsers: users })
  //   console.log(users)
  // }
  //searchedUser is an object, to use indexOf, needs to be a string or an array.
  //json.stringify or look in stackoverflow from tutoring session (object.entries or number 22)

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
        <UsersView employees={this.state.filteredUsers} />

      </div>

    )
  };
}

export default App;
