//iimports
import React from 'react';
import DataTable from "./DataTable";
import Nav from "./DataTable";
import API from '../utils/API';

class DataArea extends React.Component {
  constructor() {
    super();
    //set state
    this.state = {
      users: [{}],
      filteredUsers: [{}]
    }

    //handleInputChange
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name);
      console.log(value);
      this.setState({
        [name]: value
      });
    }

    //handleFilter
    handleFilter = event => {
      const filter = event.target.value;
      const filteredEmp = this.state.users.filter(item => {
        let values = Object.values(item)
          .join("")
          .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
      });
      this.setState({ filteredUsers: filteredList });
    }
  };


  //componentDidMount
  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  //render
  render() {
    return (
      <div>
         <Nav handleInputChange={this.state.handleInputChange} />
        <div className="data-area">
          <DataTable
            users={this.state.filteredUsers}
            handleFilter={this.state.handleFilter}
          />
        </div>
      </div>
    );
  }
}








export default DataArea;

//set state
const DataArea = () => {
  state = {
    allUsers: [{}],
    filteredUsers: [{}],
    searchTerm: ""
  }
}

//sortUsers 

//handleInputChange

//return Nav and DataTable