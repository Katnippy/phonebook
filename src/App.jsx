import { useState } from 'react';

import Entry from './components/Entry';

export default function App() {
  const [persons, setPersons] = useState([
    { name: 'Pingu' }
  ]);
  const [newName, setNewName] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
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
