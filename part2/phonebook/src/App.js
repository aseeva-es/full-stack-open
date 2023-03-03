import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const addName = (e) => {
    e.preventDefault();
 
    const doubleNames = persons.filter((person) => person.name === newName);

    if (!doubleNames.length) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
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
