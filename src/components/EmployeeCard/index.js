import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Contact Number:</strong> {props.phone}
          </li>
          <li>
            <strong>Email Address:</strong> {props.email}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default EmployeeCard;
