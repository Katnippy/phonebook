import { useState } from 'react';

import Entry from './components/Entry';

export default function App() {
  const [persons, setPersons] = useState([
    { name: 'Pingu' }
  ]);
  const [newName, setNewName] = useState('');

  function addEntry(event) {
    event.preventDefault();
    if (!persons.some((person) => person.name === newName)) {
      const entryObject = {
        name: newName
      }
      setPersons(persons.concat(entryObject));
      setNewName('');
    } else {
      alert(`${newName} has already been added to the phonebook!`);
    }
  }

  function handleEntryChange(event) {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            id="name" value={newName} onChange={handleEntryChange}>
          </input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => 
          <Entry key={person.name} entry={person} />
        )}
      </ul>
    </div>
  );
}
