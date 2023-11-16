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
