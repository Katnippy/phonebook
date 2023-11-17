import { useState, useEffect } from 'react';

import entryService from './services/entries';
import SearchForm from './components/SearchForm';
import AddForm from './components/AddForm';
import Entries from './components/Entries';

export default function App() {
  const [entries, setEntries] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [results, setResults] = useState('');

  useEffect(() => {
    entryService
      .read()
      .then(initialEntries => {
        setEntries(initialEntries);
      });
  }, []);

  function handleSearchChange(event) {
    if (event.target.value != '') {
      setResults(entries.filter((entry) => 
        entry.name.toLowerCase().includes(event.target.value.toLowerCase())));
    } else {
      setResults('');
    }
  }

  function clearFields() {
    setNewName('');
    setNewNumber('');
  }

  function replaceEntry() {
    if (
      window.confirm(`${newName} has already been added to the phonebook - ` + 
      'replace their old number with a new one?')
    ) {
    const oldEntry = entries.find((entry) => entry.name === newName);
    const newEntry = { ...oldEntry, number: newNumber };
    entryService
      .update(oldEntry.id, newEntry)
      .then((returnedEntry) => {
        setEntries(entries.map((entry) => 
          entry.id !== oldEntry.id ? entry : returnedEntry));
      })
      .catch(() => {
        alert(
          `Unable to replace ${newName}'s number - perhaps this contact has ` +
          'been deleted?'
        );
      });
    } else {
      clearFields();
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
      entryService
        .create(entryObject)
        .then(returnedEntry => {
          setEntries(entries.concat(returnedEntry));
          clearFields();
        });
    } else if (entries.some((entry) => entry.name === newName)) {
      replaceEntry(entries);
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

  const deleteEntry = (entryToDelete) => {
    if (window.confirm(`Delete ${entryToDelete.name} from your contacts?`)) {
      entryService
        .destroy(entryToDelete.id)
        .then(() => {
          const updatedEntries = entries.filter((entry) => 
            entry.id !== entryToDelete.id);
          setEntries(updatedEntries);
        })
        .catch(() => {
          alert(
            `Unable to delete ${entryToDelete.name} - perhaps this contact has` 
            + ' already been deleted?'
          );
        });
    }
  };

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
        <Entries entries={entries} deleteEntry={deleteEntry} />
      </div>
    </div>
  );
}
