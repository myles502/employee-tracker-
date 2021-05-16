import React, { Component } from "react";
import API from "../../Utils/API";
import EmployeeCard from "../EmployeeCard";
import SearchForm from "../searchForm";
import App from "../../App";

class EmployeeContainer extends Component {
  state = {
    employees: [{}],
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    //populating the random users or employees
    API.getRandomUsers().then((response) => {
      console.log("API", response);
      this.setState({
        employees: response.data.results,
      });
      console.log("Employees", this.state.employees);
    });
  };

  searchEmployees = (query) => {
    console.log("Search user ", query);
    if (query !== "" || query!== undefined ) {
      const filteredUser = this.state.employees.filter(
        (employee) =>
          employee.name?.first.toLowerCase() === query.toLowerCase() ||
          employee.name?.last.toLowerCase() === query.toLowerCase() ||
          employee.name?.first.toLowerCase() +
            " " +
            employee.name?.last.toLowerCase() ===
            query.toLowerCase()
      );
      this.setState({ employees: filteredUser });
    } else {
      this.getUsers();
    }
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.employees.length ? (
          this.state.employees.map((employee) => {
            // console.log(employee)
            return (
              <EmployeeCard
                name={employee.name?.first + " " + employee.name?.last}
                picture={employee.picture?.large}
                phone={employee.phone}
                email={employee.email}
              />
            );
          })
        ) : (
          <h2>no employees found!</h2>
        )}
      </div>
    );
  }
}

export default EmployeeContainer;
