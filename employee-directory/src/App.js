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
        allUsers: employees.data.results
      });
    });
  }

  searchAPI = query => {
    API.getUsers(query)
      .then(res => this.setState({ allUsers: results.data.results }))
      .catch(err => console.log(err));
  };


  //handleInputChange
  //name and value of input that will cause change
  //change(setState) searchTerm
  //filter users based on searchTerm
  //sort if relevant
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }

  //handleFormsubmit
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchAPI(this.state.search);
  };



  render() {
    return (
      <div className="App">

        <Header />
        <FormInput 
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit} 
          handleInputChange={this.handleInputChange}
        />
        <UsersView employees={this.state.allUsers} />

      </div>

    )
  };
}

export default App;
