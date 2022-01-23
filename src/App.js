import React, { Component } from "react";
import{Alert, Button,Badge } from "react-bootstrap";

import Persons from "./components/person/Persons";

class App extends Component {
  state = {
    persons: [
      // {id : 1, fullname : "lida rouzban", age : 40},
      // {id : 2, fullname : "leila shahkarami",  age : 43},
      // {id : 3, fullname : "reza taji",  age : 41}
    ],
    person: { fullname: "", age: 0 },
    showDiv: true,
  };
  handel = () => {
    this.setState({ showDiv: !this.state.showDiv });
  };

  deletPerson = (id) => {
    const persons = [...this.state.persons];
    const filterPerson = persons.filter((person) => person.id !== id);
    this.setState({ persons: filterPerson });
  };
  handelNameChange = (event, id) => {
    const { persons: allPersons } = this.state;
    const personIndex = allPersons.findIndex((p) => p.id == id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;

    const persons = [...allPersons];

    persons[personIndex] = person;
    this.setState({ persons });
  };
  handelNewPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: persons.length,
      fullname: this.state.person,
    };
    if(person.fullname.length > 1 && person.fullname !== " "){

      persons.push(person);
      this.setState({ persons, person: { fullname: "" } });
    }
    
  };
  setPerson = (event) => {
    this.setState({ person: event.target.value });
  };



  render() {
    const { persons, showDiv } = this.state;
    let person = null;

  let badgeStyle = [];
  if(persons.length >=3)badgeStyle.push("bg-success");
  if(persons.length <=2)badgeStyle.push("bg-warning");
  if(persons.length <=1)badgeStyle.push("bg-danger");
  
    if (showDiv) {
      person = (
        <Persons
          persons={persons}
          deletPerson={this.deletPerson}
          personChange={this.handelNameChange}
        />
      );

    }
    const buttonstyle = {
      padding: "8px",
      backgroundColor: "pink",
    };

    return (
      <div className=" container-fluid text-center">
        <Alert variant="info">
          <h2>persons managment</h2>
        </Alert>

        <Alert variant="light" >
        there is
          <Badge className={`` pill ${badgeStyle.join(" ")}`}>
            {persons.length}
          </Badge>{" "}
          persons{" "}
        </Alert>
      
        <div className="m-2 p-2" > 
          <form className="form-inline justify-content-center" onSubmit={event=>event.preventDefault()}>
            <div className=" input-group w-25 mx-auto">
              <input
                type="text"
                placeholder="give a person"
                onChange={this.setPerson}
                value={this.state.person.fullname}
                className="form-control"
              />
              <div className="input-group-prepend ">
                <Button type="submit"
                size="md"
                  onClick={this.handelNewPerson}
                  className=" fa fa-plus"
                  variant="success"
                />
              </div>
            </div>
          </form>
        </div>

        <Button id="show-pwerson " onClick={this.handel} variant={showDiv ? 'info' : 'danger'}>
          {" "}
          show persons
        </Button>
        {person}
      </div>
    );
  }
}

export default App;
