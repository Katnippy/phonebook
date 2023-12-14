import PropTypes from 'prop-types';

import Entry from './Entry';

export default function Entries( { entries, deleteEntry }) {
  return (
    <ul>
      {entries.map((entry) => 
        <Entry key={entry.name} entry={entry} deleteEntry={deleteEntry} />)}
    </ul>
  );
}

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
  deleteEntry: PropTypes.func.isRequired,
};
