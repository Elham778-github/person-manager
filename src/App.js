import React, { Component } from 'react';

import Persons from './components/person/Persons';

class App extends Component {
    state = { 
        persons :[
            {id : 1, fullname : "lida rouzban", age : 40},
            {id : 2, fullname : "leila shahkarami",  age : 43},
            {id : 3, fullname : "reza taji",  age : 41}
        ], showDiv : false
    }
    handel = () => {
        this.setState({showDiv : !this.state.showDiv});
        
    }   
    deletPerson = id =>{
        const persons = [...this.state.persons];
        const filterPerson = persons.filter(person => (person.id !== id));
        this.setState({persons : filterPerson});
    } 
    handelNameChange = (event, id)=>{
        const Person

    }

    
    render(){
        const {persons, showDiv} = this.state;
        let person =null;
        if(showDiv){
            person = <Persons persons={persons}  deletPerson={this.deletPerson} />


        }
        const buttonstyle = {
            padding :"8px",
            backgroundColor : "pink"
        }

        
        return(
            <div>
                <h2>persons managment</h2>
                <h3>there is {persons.length} persons</h3>
                {person}
            <button onClick={this.handel} style={buttonstyle}> click on me</button>
            <button onClick={this.deletPerson} style={buttonstyle}> delet</button>
            
            </div>
            );
        };
        
        
        
    }
    
    export default App;
    
    