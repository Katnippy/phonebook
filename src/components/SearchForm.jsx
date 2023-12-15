import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Entries from './Entries';

export default function SearchForm({ results, handleSearchChange }) {
  return (
    <>
      <div id="search-box">
        <Form.Control id="search" onChange={handleSearchChange}></Form.Control>
      </div>
      <div>{results ? <Entries entries={results} /> : ''}</div>
    </>
  );
}

SearchForm.propTypes = {
  results: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};
