import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListItemContainer,
  Status,
  Avatar,
  Name,
} from './FriendListItem.styled';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <FriendListItemContainer>
      <Status statusColor={statusColor} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendListItemContainer>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
