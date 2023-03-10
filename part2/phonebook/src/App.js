import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import Persons from "./components/Persons";
import personsModule from "./services/personsModule";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [message, setMessage] = useState();

  const showMessage = (text, type = "message", intervalTime = 2000) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage();
    }, intervalTime);
  };

  useEffect(() => {
    personsModule.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = (e) => {
    e.preventDefault();
    const doubleNames = persons.filter((person) => person.name === newName);
    if (!doubleNames.length) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personsModule.createPerson(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        showMessage(`${newPerson.name} created`);
        setNewNumber("");
        setNewName("");
      })
      .catch((error) => {
        showMessage("Create person failed: " + error, "error");
      });;
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const changedPerson = { ...doubleNames[0], number: newNumber };
        personsModule
          .changePerson(changedPerson)
          .then((changedPerson) => {
            setPersons(
              persons.map((person) => {
                return person.id === changedPerson.id ? changedPerson : person;
              })
            );
            showMessage(`${changedPerson.name} changed`, "error");
            setNewNumber("");
            setNewName("");
          })
          .catch((error) => {
            showMessage("error: " + error, "error");
          });
      }
    }
  };

  const onDeletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsModule
        .deletePerson(person.id)
        .then((removedPerson) => {
          setPersons(persons.filter((pers) => pers.id != person.id));
          showMessage(`${person.name}  deleted`);
        })

        .catch((error) => {
          showMessage(`${person.name} has already been deleted`, "error");
        });
    }
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
      {message && <Notification text={message.text} type={message.type} />}
      <Search onChange={handleSearchInput} value={searchInput} />
      <h2>Add new</h2>
      <PersonForm
        onSubmit={addName}
        value={newName}
        onChange={handleNameChange}
        value2={newNumber}
        onChange2={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchInput={searchInput}
        onDeletePerson={onDeletePerson}
        // onChangeNumber={onChangeNumber}
      />
    </div>
  );
};
export default App;
