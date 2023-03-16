import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data);
    })
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    // console.log("newName:", event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addNewName = (event) => {
    event.preventDefault();

    if (persons.findIndex((person) => person.name === newName) >= 0) {
      return alert(`${newName} is already added to phonebook`);
    }

    // add person
    setPersons(persons.concat({ name: newName, number: newNumber }));

    // clear new name
    setNewName("");

    // clear new number
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addNewName={addNewName}
      />

      <h3>Numbers</h3>
      
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
