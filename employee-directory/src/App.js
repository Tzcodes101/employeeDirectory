import React from "react";

import Nav from "./components/Nav";
import UsersView from "./components/UsersView";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <UsersView />
    </div>
    
  )
};

// function FormInput() {
//   return <div>form input</div>
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
