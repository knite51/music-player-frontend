import React, { Component, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './Section';
import AddFriends from './AddFriends';
import List from './List';
import NewFriends from './NewFriends';
import SnowFlakes from './snowFlakes';

const App = () => {
  // const [username, setUsername] = useState('Ayotunde');
  // const [newFriend, setNewFriend] = useState('');
  // const [friends, setFriends] = useState(['isaac', 'ebuka', 'joe']);


  const reducer = (previousState, newState) => {
    return { ...previousState, ...newState }
  }

  const [{ username, newFriend, friends }, setState] = useReducer(reducer, {
    username: 'Ayotunde',
    newFriend: '',
    friends: ['isaac', 'ebuka', 'joe']
  });

  const handleNewlyAddedFriend = event => setState({newFriend: event.target.value});
  const addToFriends = () => {
    setState({ friends: friends.concat(newFriend) });
    setState({ username: newFriend });
    setState({ newFriend: '' });
  };

  useEffect(() => {
    document.title = newFriend;
  }, [newFriend])

  return <div className="App">
    <SnowFlakes />
      <header className="App-header">
        <Section username={username} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <AddFriends Username={username} handleInsert={onhandleInsert} /> */}
        <NewFriends handleNewlyAddedFriend={handleNewlyAddedFriend} newFriend={newFriend} addToFriends={addToFriends} />
        <List friends={friends} />
      </header>
    </div>;
}

export default App;
