import PropTypes from 'prop-types';

export default function AddForm({ addEntry, newName, handleNameChange, 
                                  newNumber, handleNumberChange }) {
  return (
    <>
      <form onSubmit={addEntry}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" value={newName} onChange={handleNameChange}>
          </input>
          <br />
          <label htmlFor="number">Number: </label>
          <input id="number" value={newNumber} onChange={handleNumberChange}>
          </input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

AddForm.propTypes = {
  addEntry: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
};
