import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Luis', age: 29},
      {name: 'Luis', age: 28},
      {name: 'Eduardo', age: 27},
    ]
  };

  switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = "Zane"
    this.setState({persons: [
      {name: 'Zane', age: 29},
      {name: 'Luis', age: 28},
      {name: 'Eduardo', age: 26},
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: Guitar</Person>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!'));
  }
}

export default App;
