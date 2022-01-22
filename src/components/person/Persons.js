import React from "react";
import Person from "./Person";

const Persons = ({persons , deletPerson, personChange }) => {

    
    return ( 
        <div>
        {persons.map(person => (
            <Person 
            key ={person.id} 
            fullname ={person.fullname} 
            age ={person.age}eletPerson={() => deletPerson(person.id)}
            changed = {event =>personChange(event, person.id)}


            />
            ))}
            
            
            </div>
            );
        }
        export default Persons;