
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
     number: '040- 23456778', }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


const addName = (e) => {
  e.preventDefault()
  const doubleNames = persons.filter((person)=>person.name === newName);

  if(!doubleNames.length){
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson)); 
    } else {
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

  return (
    <div>
      <h2>Phonebook</h2>
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
persons.map((person)=> <div key = { person.name }>{ person.name } { person.number }</div>)
    }
    
    </div>
  )
}
export default App