import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className="section">
        This is {this.props.Username }
      </div>
    )
  }
}

export default Section;
