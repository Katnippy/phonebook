import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AddForm({ addEntry, newName, handleNameChange, 
                                  newNumber, handleNumberChange }) {
  return (
    <>
      <Form onSubmit={addEntry}>
        <Form.Group>
          <Form.Label htmlFor="name">Name: </Form.Label>
          <Form.Control id="name" value={newName} onChange={handleNameChange}>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="number">Number: </Form.Label>
          <Form.Control id="number" value={newNumber} 
            onChange={handleNumberChange}>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Add</Button>
      </Form>
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
