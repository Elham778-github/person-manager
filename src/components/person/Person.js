import React from 'react';

const Person = ({key, fullname,deletPerson, changed }) => {

    return ( 


        <div className='person' style={{cursor : "pointer" }}>
            <p> I am {`${fullname} `} </p>
            <input  plaholder={fullname} onChange={changed}></input>
            <button onClick={deletPerson}>Delet</button>
        </div>
     );
}
 
export default Person;