import React from 'react';

const List = ({ friends }) => {

  return (
    <div className="list">
      <ul>
        {friends.map((friend, index) =>
          <li
            key={index}
            style={{ listStyle: 'none' }} >
            {friend}
          </li>)}
      </ul>

    </div>
  )

}

export default List;
