import React from "react";
import Person from "./Person";

const Persons = ({persons , deletPerson, personChange }) => {

    
    return ( 
        <div>
        {persons.map(person => (
            <Person 
            person ={person} 
            deletPerson={() => deletPerson(person.id)}
            personChange = {(event) =>(event, person.id)}


            />
            ))}
            
            
            </div>
            );
        }
        export default Persons;