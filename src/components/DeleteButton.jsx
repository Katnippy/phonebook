export default function DeleteButton({ deleteEntry, entry }) {
  return <button onClick={() => deleteEntry(entry)}>Delete</button>;
}