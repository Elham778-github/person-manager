import React from 'react';
import  "./person.css";

const Person = ({key, fullname, age ,deletPerson, changed }) => {

    return ( 


        <div className='person' style={{cursor : "pointer" }}>
            <p> I am {`${fullname}  ${age}`} </p>
            <input  plaholder={fullname} onChange={changed}></input>
            <button onClick={deletPerson}>Delet</button>
        </div>
     );
}
 
export default Person;