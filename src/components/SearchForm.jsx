import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Entry from './Entry';

export default function SearchForm({ results, handleSearchChange }) {
  return (
    <>
      <Form.Control id="search" onChange={handleSearchChange}></Form.Control>
      <ul>
        {results ? results.map((result) => 
          <Entry key={result.name} entry={result} />): ''}
      </ul>
    </>
  );
}

SearchForm.propTypes = {
  results: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};
