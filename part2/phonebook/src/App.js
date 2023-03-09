import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addName = (e) => {
    e.preventDefault();
    const doubleNames = persons.filter((person) => person.name === newName);
    if (!doubleNames.length) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      axios.post('http://localhost:3001/persons', newPerson)
      .then(response => {
        setPersons(persons.concat(response.data));
      })
    } else {
        alert(`${newName} is already added to phonebook`);
    }
    setNewNumber("");
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search onChange={ handleSearchInput } value={ searchInput } />
      <h2>Add new</h2>
      <PersonForm
        onSubmit={ addName }
        value={ newName }
        onChange={ handleNameChange }
        value2={ newNumber }
        onChange2={ handleNumberChange }
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchInput = {searchInput}/>
    </div>
  );
};
export default App;
