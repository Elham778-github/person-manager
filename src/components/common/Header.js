import React, {useContext} from "react";
import { Badge, Alert } from "react-bootstrap";
import SimpleContext from "../../contex/simpleContex";
import Persons from '../person/Persons';


const Header = ({ appTitle}) => {
  const context=useContext(SimpleContext);
  
  const {persons} = context;

  let badgeStyle = "";
  if (persons.length >= 3) badgeStyle = "bg-success";
  if (persons.length <= 2) badgeStyle = "bg-warning";
  if (persons.length <= 1) badgeStyle = "bg-danger";


  return (
    // <SimpleContext.Consumer  >
      // {context =>(
              <div>
              <Alert variant="info">
                <h2>{appTitle}</h2>
              </Alert>
      
              <Alert variant="light" >
                there is
                <Badge pill className={badgeStyle}>
                  {persons.length}
                </Badge>persons
              </Alert>
      
            </div>
      
        
      // )}
    // </SimpleContext.Consumer>

  );
}

export default Header;