import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //Import person from the person folder and person.js

class App extends Component {
  state = {
    persons : [
      {name: "Ronnie", age: 25},
      {name: "Namwanza", age: 26},
      {name: "Johnpaul", age: 24}
    ],
    anotherState: 'Some other state' //we don't want everything to change, here anotherstate remains unchanged
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked successfully!');
    //here the DOM got updated coz the state got changed
    this.setState({ //setState here is used to change the old state to the new state
      persons : [ //change the state for the old state to this new state 
        {name: newName, age: 25}, //Ronnie is changed to Julius on click 
        {name: "Namwanza", age: 26}, // remains unchanged
        {name: "Johnpaul", age: 27} //Johnpaul's name is changed to 27
      ]
    })
  }
  //onclick the switchNameHandler gets changed to the new state
  //we have used click={this.switchNameHandler} to change the state using the property for the person
  
  changeNameHandler = (event) => {
    this.setState({ 
      persons : [ 
        {name: "Ronnie", age: 25}, 
        {name: event.target.value, age: 26}, 
        {name: "Johnpaul", age: 27}
      ]
    })

  }
  render() {
    const styling = {
      color: 'black',
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '6px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm react App!</h1>
        <p>This really works fine!</p>
        <button style={styling} onClick={this.switchNameHandler.bind(this, 'Ruth')}>switch names</button>
        <Person 
        name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name} age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Wilson!')}
         changed={this.changeNameHandler}>My hobbies: Football</Person> 
        <Person 
        name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement("div", null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
