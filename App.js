import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employees from './Employees.json';

function App() {
  return (
    <Wrapper>
      <Title>Employees List</Title>
      <EmployeeCard
        name={Employees[0].name}
        image={Employees[0].image}
        occupation={Employees[0].occupation}
        location={Employees[0].location}
      />
      <EmployeeCard
        name={Employees[1].name}
        image={Employees[1].image}
        occupation={Employees[1].occupation}
        location={Employees[1].location}
      />
      <EmployeeCard
        name={Employees[2].name}
        image={Employees[2].image}
        occupation={Employees[2].occupation}
        location={Employees[2].location}
      />
    </Wrapper>
  );
}

export default App;
