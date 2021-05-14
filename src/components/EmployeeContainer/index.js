import React, { Component } from "react";
import API from '../../Utils/API'; 
import EmployeeCard from '../EmployeeCard';
import SearchForm from '../searchForm/index'

class EmployeeContainer extends Component {
state = {
    employees: [{}]
  }
 componentDidMount() {
 //populating the random users or employees 
 API.getRandomUsers().then( response => {
    console.log("API", response); 
    this.setState
    ({
        employees: response.data.results
    }); 
    console.log("Employees", this.state.employees)

 }
 );
}


searchEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
};

handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
};

handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
};


render(){
    return ( <div> 
      {this.state.employees.length ? (
          this.state.employees.map((employee) => { 
            console.log(employee)
            return ( 
                <EmployeeCard
                name= {employee.name?.first + " " + employee.name?.last} 
                picture= {employee.picture?.large}
                phone = {employee.phone}
                email = {employee.email}/>
            )
            
          })
      ):
      (
          <h2>no employees found!</h2>
      )} 
    </div>); 
}


}

export default EmployeeContainer;