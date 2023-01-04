import css from './Friends.module.css';

import FriendListItem from './FriendListItem';

import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          id={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
