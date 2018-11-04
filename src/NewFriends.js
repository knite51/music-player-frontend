import React from 'react'

function NewFriends({ addToFriends, newFriend, handleNewlyAddedFriend }) {
  // const [newFriend, setNewFriend] = useState('');

  // const handleInputChange = (event) => {
  //   setNewFriend(event.target.value);
  // }

  return (
    <div>
      <input type="text" value={newFriend} onChange={handleNewlyAddedFriend} />
      <button onClick={addToFriends}>Submit</button>

    </div>
  )
}
export default NewFriends
