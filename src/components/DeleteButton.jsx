import PropTypes from 'prop-types';

export default function DeleteButton({ deleteEntry, entry }) {
  return <button onClick={() => deleteEntry(entry)}>Delete</button>;
}

DeleteButton.propTypes = {
  deleteEntry: PropTypes.func.isRequired,
  entry: PropTypes.object.isRequired,
};
