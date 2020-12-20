import React from "react";
import "./App.css";

function UsersView() {
  return <div>users view</div>
}


function FormInput() {
  return <div>form input</div>
}

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
  

    //   //handleInputChange
    //   //change(setState) searchTerm
    //   //filter users based on searchTerm
    //   //sort if relevant

    //   //sortUsers
    //   //using js sort (by string, or number (DOB))

    render() {
      return (
        <div className="App">

          <FormInput />
          <UsersView

          />

        </div>

      )
    };
  }

  export default App;
