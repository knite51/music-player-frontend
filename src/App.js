import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './Section';
import AddFriends from './AddFriends';
import List from './List';
import NewFriends from './NewFriends';

const App = () => {
  const [username, setUsername] = useState('Ayotunde');
  const [newFriend, setNewFriend] = useState('');
  const [friends, setFriends] = useState(['isaac', 'ebuka', 'joe']);

  const handleNewlyAddedFriend = (event) => setNewFriend(event.target.value);
  const addToFriends = () => {
    setFriends(friends.concat(newFriend));
    setUsername(newFriend);
    setNewFriend('');
  };

  useEffect(() => {
    document.title = newFriend;
  }, [newFriend])

  return (
    <div className="App">
      <header className="App-header">
        <Section username={username} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        {/* <AddFriends Username={username} handleInsert={onhandleInsert} /> */}
        <NewFriends 
          handleNewlyAddedFriend={handleNewlyAddedFriend}
          newFriend={newFriend}
          addToFriends={addToFriends}
        />
        <List friends={friends}></List>
      </header>
    </div>
  )
}

export default App;
