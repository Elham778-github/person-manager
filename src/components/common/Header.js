import React from "react";
import { Badge, Alert } from "react-bootstrap";
import SimpleContext from "../../contex/simpleContex";


const Header = ({ personsLengt}) => {
  let badgeStyle = "";
  if (personsLengt >= 3) badgeStyle = "bg-success";
  if (personsLengt <= 2) badgeStyle = "bg-warning";
  if (personsLengt <= 1) badgeStyle = "bg-danger";


  return (
    <SimpleContext.Consumer  >
      {context =>(
              <div>
              <Alert variant="info">
                <h2>{context.state.appTitle}</h2>
              </Alert>
      
              <Alert variant="light" >
                there is
                <Badge pill className={badgeStyle}>
                  {context.state.persons.length}
                </Badge>persons
              </Alert>
      
            </div>
      
        
      )}
    </SimpleContext.Consumer>

  );
}

export default Header;