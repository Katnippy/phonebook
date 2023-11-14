import Entry from './Entry';

export default function Entries( { entries }) {
  return (
    <ul>{entries.map((entry) => <Entry key={entry.name} entry={entry} />)}</ul>
  );
}