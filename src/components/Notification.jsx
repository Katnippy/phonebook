import PropTypes from 'prop-types';

import './Notification.css';

export default function Notification({ notification: { message, style }}) {
  // ? If notification === null?
  if (message === null) {
    return null;
  }

  return (
    <div className={style}>
      <h2>{message}</h2>
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    message: PropTypes.string,
    style: PropTypes.string,
  }),
};
