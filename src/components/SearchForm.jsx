import PropTypes from 'prop-types';

import Entry from './Entry';

export default function SearchForm({ results, handleSearchChange }) {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" onChange={handleSearchChange}></input>
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
