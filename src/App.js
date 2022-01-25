import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/person/Persons";
import Header from "./components/common/Header";
import SimpleContext from "./contex/simpleContex";
import NewPerson from "./components/person/NewPerson";




const App = () => {
  // state = {
  //   persons: [],
  //   person: { fullname: "", age: 0 },
  //   showDiv: true,
  //   appTitle: " Person Manager"
  // };

  const [getPersons, setPersons] = useState([] );
  const [getSinglePerson, setSinglePerson] = useState({ fullname: "" } );
  const [getShowDiv, setShowDiv] = useState(true );

  const handel = () => {
    setShowDiv( !getShowDiv );
  };

  const deletPerson = (id) => {
    const persons = [...getPersons];
    const findIndex = persons.findIndex((p) => p.id == id);
    const person = persons[findIndex];

    const filterPerson = persons.filter((person) => person.id !== id);
    setPersons( filterPerson );
    toast.error(`${person.fullname} is successfull deleted`)
  };
  const handelNameChange = (event, id) => {
    const { persons: allPersons } =getPersons;
    const personIndex = allPersons.findIndex((p) => p.id == id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;

    const persons = [...allPersons];

    persons[personIndex] = person;
    setPersons( persons );
  };
  const handelNewPerson = () => {
    const persons = [...getPersons];
    const person = {
      id: persons.length,
      fullname: getSinglePerson,
    };
    if (person.fullname.length > 1 && person.fullname !== " ") {

      persons.push(person);
      setPersons( persons );
      setSinglePerson ({ fullname: "" });
      toast.success("person added successful", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true
      })
    }

  };
  const setPerson = (event) => {
    setSinglePerson( event.target.value );
  };




  let person = null;

  if (getShowDiv) {
    person = (
      <Persons />
    );

  }
  const buttonstyle = {
    padding: "8px",
    backgroundColor: "pink",
  };

  return (

    <SimpleContext.Provider 
    value={{
      persons: getPersons,
      handelNameChange: handelNameChange,
      deletPerson: deletPerson,
      setPerson: setPerson,
      handelNewPerson: handelNewPerson,
      person : getSinglePerson
    }}>
      <div className=" container-fluid text-center">
        {/* <Alert > was here */}
        <Header appTitle="personManager" personsLengt={getPersons.length} />

        <NewPerson />
        <Button id="show-pwerson " onClick={handel} variant={getShowDiv ? 'info' : 'danger'}>
          {" "}
          show persons
        </Button>
        {person}
        <ToastContainer />
      </div>
    </SimpleContext.Provider>
  );

}

export default App;
