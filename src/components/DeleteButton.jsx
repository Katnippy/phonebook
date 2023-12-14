import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function DeleteButton({ deleteEntry, entry }) {
  return (
    <Button variant="danger" onClick={() => deleteEntry(entry)}>
      Delete
    </Button>
  );
}

DeleteButton.propTypes = {
  deleteEntry: PropTypes.func.isRequired,
  entry: PropTypes.object.isRequired,
};
