import React, { Component } from 'react';

export default class AddFriends extends Component {
  
    state = {
      newFriend: ''
    }
  
  onhandleNewFriend = (event) => {
    this.setState({
      newFriend: event.target.value,
    })
  }
  onhandleNew = () => {
    this.props.handleInsert(this.state.newFriend)
    this.setState(() => ({
      newFriend: ''
    }), console.log(this.state.newFriend))
  }



  render() {
    const { state: { newFriend }, onhandleNewFriend, onhandleNew } = this;
    return (
      <div>
        <input type="text" value={newFriend} onChange={onhandleNewFriend}/>
        <button onClick={onhandleNew}>Submit</button>
 
      </div>
      // <div className="addfriends">
      //   { this.props.children }
      // </div>
    )
  }
}
