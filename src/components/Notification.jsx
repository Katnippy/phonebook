import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Notification.css';

export default function Notification({ notification: { message, style }}) {
  return (
    <div>
      {message && <Alert variant={style}>{message}</Alert>}
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    message: PropTypes.string,
    style: PropTypes.string,
  }),
};
