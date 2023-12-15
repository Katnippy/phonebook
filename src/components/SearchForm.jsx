import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Entry from './Entry';

export default function SearchForm({ results, handleSearchChange }) {
  return (
    <>
      <div id="search-box">
        <Form.Control id="search" onChange={handleSearchChange}></Form.Control>
      </div>
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
