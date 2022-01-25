import  {createContext}from 'react';

const SimpleContext= createContext({
persons :[],
    deletPerson : () =>{},
    person : "",
    handelNameChange : ()=>{},
    setPerson : ()=>{},
    handelNewPerson: () => {}


})
export default SimpleContext;
