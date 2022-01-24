import React, {createContext}from 'react';

const SimpleContext= createContext({
    state :{} ,
    deletPerson : () =>{},
    handelNameChange : ()=>{},
    setPerson : ()=>{}


})
export default SimpleContext;
