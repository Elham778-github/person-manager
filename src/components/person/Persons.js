import React from "react";
import Person from "./Person";

const Persons = ({persons , deletPerson }) => {

    
    return ( 
        <div>
        {persons.map(person => (
            <Person 
            person ={person} 
            deletPerson={() => deletPerson(person.id)}

            />
            ))}
            
            
            </div>
            );
        }
        export default Persons;