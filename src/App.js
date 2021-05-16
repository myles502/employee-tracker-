import React from "react";
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import EmployeeContainer from './components/EmployeeContainer'

function App(props) {

  
    return(<Wrapper>
      <Title>Employees List
        <div><h5>search by name</h5></div>

      </Title>
      <EmployeeContainer />
      
    </Wrapper>)
  } 
    
      
 


export default App;
