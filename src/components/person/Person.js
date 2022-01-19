import React from 'react';
import  "./person.css";

const Person = ({person ,deletPerson , personChange}) => {

    return ( 


        <div className='person' style={{cursor : "pointer"}}>
            <p> I am {`${person.fullname}  ${person.age}`} </p>
            <input type="text" plaholder={person.fullname} onChange={personChange}></input>
            <button onClick={deletPerson}>Delet</button>
        </div>
     );
}
 
export default Person;