import React from 'react';

const Person = ({person ,deletPerson}) => {

    return ( 


        <div onClick={deletPerson} style={{cursor : "pointer"}}>
            <p> I am {`${person.fullname}  ${person.age}`} </p>
        </div>
     );
}
 
export default Person;