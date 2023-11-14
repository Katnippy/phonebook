import { useState } from 'react';

import Entry from './components/Entry';

export default function App() {
  const [entries, setEntries] = useState([
    { name: 'Pingu', number: '02086876000' },
    { name: 'Piplup', number: '07066775792' },
    { name: 'Wheezy', number: '07830494624' },
    { name: 'Tuxedosam', number: '07750295291' },
    { name: 'Tux', number: '07027167775' },
    { name: 'Pinga', number: '07034452515' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [results, setResults] = useState('');

  function handleSearchChange(event) {
    setResults(entries.filter((entry) => 
      entry.name.toLowerCase().includes(event.target.value.toLowerCase())));
  }

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
      <div>
        <h1>Phonebook</h1>
      </div>
      <div>
        <h2>Search for an entry by name</h2>
        <label htmlFor="search">Search: </label>
        <input id="search" onChange={handleSearchChange}></input>
        <ul>
          {results && results.length !== entries.length ? 
            results.map((result) => <Entry key={result.name} entry={result} />)
              : ''}
        </ul>
      </div>
      <div>
        <h2>Add an entry</h2>
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
      </div>
      <div>
        <h2>Numbers</h2>
        <ul>
          {entries.map((person) => 
            <Entry key={person.name} entry={person} />
          )}
        </ul>
      </div>
    </div>
  );
}