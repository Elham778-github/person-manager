import React, { Component } from "react";

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
      id: Math.floor(Math.random() * 1000),
      fullname: this.state.person,
    };
    persons.push(person);
    this.setState({ persons, person: { fullname: "" } });
  };
  setPerson = (event) => {
    this.setState({ person: event.target.value });
  };
  render() {
    const { persons, showDiv } = this.state;
    let person = null;
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
      <div>
        <h2>persons managment</h2>
        <h3>there is {persons.length} persons</h3>
        <div>
          <input type="text" placeholder="make a new person" onChange={this.setPerson} value={this.state.person.fullname}/>
          <button onClick={this.handelNewPerson}>Add</button>
        </div>

        <button onClick={this.handel} className="btn btn-lg btn-success fa fa-plus" />
        {person}
      </div>
    );
  }
}

export default App;
