import React from "react";
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
    searchTerm: ""
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



  render() {
    return (
      <div className="App">


        <FormInput handleInputChange={this.handleInputChange}/>
        <UsersView employees={this.state.allUsers} />

      </div>

    )
  };
}

export default App;
