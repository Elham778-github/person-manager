import React from "react";
import { Badge, Alert } from "react-bootstrap";


const Header  = ({personsLengt}) => {
    let badgeStyle = "";
    if(personsLengt >=3)badgeStyle="bg-success";
    if(personsLengt <=2)badgeStyle="bg-warning";
    if(personsLengt <=1)badgeStyle="bg-danger";
    
  
    return (
        
        <div>
        <Alert variant="info">
          <h2>persons managment</h2>
        </Alert>

        <Alert variant="light" >
        there is
          <Badge pill className={badgeStyle}>
            {personsLengt}
          </Badge>persons
        </Alert>

        </div>

      );
}
 
export default Header ;