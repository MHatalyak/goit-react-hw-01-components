import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListContainer } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
