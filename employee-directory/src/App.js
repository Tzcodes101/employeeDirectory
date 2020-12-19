import React from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
    
  )
};

// function FormInput() {
//   return <div>form input</div>
// }

// function UsersView(props) {
//   //props: users (filteredUsers)
//   //button to filter by name
//   //onClick => this.sortUsers
//   return <div>{props}</div>
// }

// class App extends Component {
//   state = {
//     allUsers: [],
//     filteredUsers: [],
//     searchTerm: ""
//   }

//   //compnentDidMount
//   //call API from utils
//   //setState
//   //allUsers: [],
//   //filteredUsers: []
//   componentDidMount() {
//     API.getUsers().then(results => {
//         this.setState({
//             allUsers: results.data,
//             filteredUsers: results.data
//         });
//     });
//     // this.searchAPI("Bryant");
// }

//   //handleInputChange
//   //change(setState) searchTerm
//   //filter users based on searchTerm
//   //sort if relevant

//   //sortUsers
//   //using js sort (by string, or number (DOB))

//   render() {
//     return (
//       <div className="App">

//         <FormInput />
//         <UsersView 
          
//         />

//       </div>

//     )
//   };
// }

export default App;
