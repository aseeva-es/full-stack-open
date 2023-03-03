
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchInput, setSearchInput] = useState('');

const addName = (e) => {
  e.preventDefault()
  const doubleNames = persons.filter((person)=>person.name === newName);

  if(!doubleNames.length){
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson)); 
    } 
     else {
        alert(`${newName} is already added to phonebook`);
    }
    setNewName('');
    setNewNumber('');
}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input type = 'search' value = { searchInput} onChange = { handleSearchInput }/>
      </div>
      <h2>Add new</h2>
      <form onSubmit={ addName }>
        <div>
          name: <input value = { newName } onChange = { handleNameChange }/>
        </div>
        <div>
          number: <input value = { newNumber } onChange = { handleNumberChange }/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    {
persons
.filter((person) => person.name.toLowerCase().includes(searchInput))
.map((person)=> <div key = { person.name }>{ person.name } { person.number }</div>)
    }
    
    </div>
  )
}
export default App