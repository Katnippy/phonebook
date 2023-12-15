import PropTypes from 'prop-types';

import DeleteButton from "./DeleteButton";

export default function Entry({ entry, deleteEntry }) {
  return (
    <>
      <tr key={entry.id}>
        <td class="align-middle">
          {entry.name}
        </td>
        <td class="align-middle">
          {entry.number}
        </td>
        <td class="align-middle">
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
