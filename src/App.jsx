import { useState } from 'react';

import Entry from './components/Entry';

export default function App() {
  const [entries, setEntries] = useState([
    { name: 'Pingu', number: '02086876000' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  function addEntry(event) {
    event.preventDefault();
    if (!entries.some((entry) => entry.name === newName) && 
      !entries.some((entry) => entry.number === newNumber)) {
      const entryObject = {
        name: newName,
        number: newNumber
      };
      setEntries(entries.concat(entryObject));
      setNewName('');
      setNewNumber('');
    } else if (entries.some((entry) => entry.name === newName)) {
      alert(`${newName} has already been added to the phonebook!`);
    } else {
      alert(`${newNumber} has already been added to the phonebook!`);
    }
  }

  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function handleNumberChange(event) {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            id="name" value={newName} onChange={handleNameChange} required>
          </input>
          <br />
          <label htmlFor="number">Number: </label>
          <input 
            id="number" value={newNumber} onChange={handleNumberChange} 
              required>
          </input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {entries.map((person) => 
          <Entry key={person.name} entry={person} />
        )}
      </ul>
    </div>
  );
}