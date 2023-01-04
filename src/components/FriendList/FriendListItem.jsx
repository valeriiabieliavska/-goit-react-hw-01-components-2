import css from './Friends.module.css';

import { VscCircleLargeFilled } from 'react-icons/vsc';

import PropTypes from 'prop-types';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOn : css.statusOff}>
        {isOnline}
        <VscCircleLargeFilled />
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
