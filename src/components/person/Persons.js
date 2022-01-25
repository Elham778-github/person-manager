import React,{useContext} from "react";
import SimpleContext from "../../contex/simpleContex";


import Person from "./Person";

const Persons = () => {
    const context = useContext(SimpleContext);


    return (
        // <SimpleContext.Consumer>
        //     {context => (
                <div>
                    {context.persons.map(person => (
                        <Person
                            key={person.id}
                            fullname={person.fullname}
                            age={person.age}
                            deletPerson={() => context.deletPerson(person.id)}
                            changed={event => context.handelNameChange(event, person.id)}
                             />
                    ))}


                </div>


        //     )}
        // </SimpleContext.Consumer>


    );
}
export default Persons;