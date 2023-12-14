import PropTypes from 'prop-types';

import DeleteButton from "./DeleteButton";

export default function Entry({ entry, deleteEntry }) {
  return (
    <li>
      {entry.name} - {entry.number}
      &nbsp;
      <DeleteButton deleteEntry={deleteEntry} entry={entry} />
    </li>
  );
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  deleteEntry: PropTypes.func.isRequired,
};
