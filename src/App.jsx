import { useState } from 'react';

import SearchForm from './components/SearchForm';
import AddForm from './components/AddForm';
import Entries from './components/Entries';

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
    if (event.target.value != '') {
      setResults(entries.filter((entry) => 
        entry.name.toLowerCase().includes(event.target.value.toLowerCase())));
    } else {
      setResults('');
    }
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
        <SearchForm results={results} handleSearchChange={handleSearchChange} />
      </div>
      <div>
        <h2>Add an entry</h2>
        <AddForm addEntry={addEntry} newName={newName} 
          handleNameChange={handleNameChange} newNumber={newNumber} 
            handleNumberChange={handleNumberChange} />
      </div>
      <div>
        <h2>Numbers</h2>
        <Entries entries={entries} />
      </div>
    </div>
  );
}
