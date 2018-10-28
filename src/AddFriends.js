import React, { Component } from 'react';

export default class AddFriends extends Component {
  render() {
    return (
      <input type="text" value={this.props.Username} onChange={this.props.handleInsert} />
      // <div className="addfriends">
      //   { this.props.children }
      // </div>
    )
  }
}
