import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/person/Persons";
import Header from "./components/common/Header";
import SimpleContext from "./contex/simpleContex";
import NewPerson from "./components/person/NewPerson";




class App extends Component {
  state = {
    persons: [],
    person: { fullname: "", age: 0 },
    showDiv: true,
    appTitle: " Person Manager"
  };
  static contextType= SimpleContext;
  handel = () => {
    this.setState({ showDiv: !this.state.showDiv });
  };

  deletPerson = (id) => {
    const persons = [...this.state.persons];
    const findIndex = persons.findIndex((p) => p.id == id);
    const person = persons[findIndex];

    const filterPerson = persons.filter((person) => person.id !== id);
    this.setState({ persons: filterPerson });
    toast.error(`${person.fullname} is successfull deleted`)
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
    if (person.fullname.length > 1 && person.fullname !== " ") {

      persons.push(person);
      this.setState({ persons, person: { fullname: "" } });
      toast.success("person added successful", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true
      })
    }

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
          // persons={persons}
          // deletPerson={this.deletPerson}
          // personChange={this.handelNameChange}
        />
      );

    }
    const buttonstyle = {
      padding: "8px",
      backgroundColor: "pink",
    };

    return (

      <SimpleContext.Provider value={{
        state: this.state,
        handelNameChange: this.handelNameChange,
        deletPerson: this.deletPerson,
        setPerson: this.setPerson,
        handelNewPerson: this.handelNewPerson
      }}>
        <div className=" container-fluid text-center">
          {/* <Alert > was here */}
          <Header personsLengt={persons.length}/>

          <NewPerson />
          <Button id="show-pwerson " onClick={this.handel} variant={showDiv ? 'info' : 'danger'}>
            {" "}
            show persons
          </Button>
          {person}
          <ToastContainer />
        </div>
      </SimpleContext.Provider>
    );
  }
}

export default App;
