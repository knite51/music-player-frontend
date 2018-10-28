import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './Section';
import AddFriends from './AddFriends';

class App extends Component {

  state = {
   username : 'Ayotunde'
  }

  onhandleInsert = (e) => {
    this.setState({
      username: e.target.value,
      friends: ['issac', 'ebuka', 'joe']
    })
  
  }


  render() {
    const {  
      onhandleInsert,
      state: { username }
    } = this;
   
    return (
      <div className="App">
        <header className="App-header">
          <Section Username={username}/>
          <img src={logo}  className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AddFriends Username={username} handleInsert={onhandleInsert}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
