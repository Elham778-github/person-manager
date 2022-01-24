import React, {createContext}from 'react';

const SimpleContext= createContext({
    state :{} ,
    deletPerson : () =>{},
    handelNameChange : ()=>{},
    setPerson : ()=>{},
    handelNewPerson: () =>{}


})
export default SimpleContext;
