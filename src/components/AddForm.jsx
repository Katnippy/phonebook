import { Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AddForm({ addEntry, newName, handleNameChange, 
                                  newNumber, handleNumberChange }) {
  return (
    <>
      <Form class="d-flex" onSubmit={addEntry}>
        <Row>
          <Col>
            <Form.Group class="align-items-end">
              <Form.Label htmlFor="name">Name: </Form.Label>
              <Form.Control id="name" value={newName} 
                onChange={handleNameChange} placeholder="Mumble" required>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group class="align-items-end">
              <Form.Label htmlFor="number">Number: </Form.Label>
              <Form.Control id="number" value={newNumber} 
                onChange={handleNumberChange} 
                placeholder="07856230382" required>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button id="add-button" variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
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
