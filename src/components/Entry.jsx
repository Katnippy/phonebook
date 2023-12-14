import PropTypes from 'prop-types';

import DeleteButton from "./DeleteButton";

export default function Entry({ entry, deleteEntry }) {
  return (
    <>
      <tr key={entry.id}>
        <td>
          {entry.name}
        </td>
        <td>
          {entry.number}
        </td>
        <td>
          <DeleteButton deleteEntry={deleteEntry} entry={entry} />
        </td>
      </tr>
    </>
  );
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  deleteEntry: PropTypes.func.isRequired,
};
