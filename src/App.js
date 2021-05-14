import React from "react";
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import EmployeeContainer from './components/EmployeeContainer'

function App(props) {

  
    return(<Wrapper>
      <Title>Employees List
      <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by Name"
          id="search"
        />
        <br />
        <button className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
      </Title>
      <EmployeeContainer />
      
    </Wrapper>)
  } 
    
      
 


export default App;
