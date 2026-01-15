import { useState, useEffect } from "react";
import axios from 'axios'
import Persons from "../components/Persons";
import PersonForm from "../components/PersonForm";
import Filter from "../components/Filter";

const App = () => {
  const [ persons, setPersons ] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [ filter, setFilter] = useState('')

  // Data handler
  const handleUpdate = (personObject) => {
    setPersons(persons.concat(personObject));
  };

  //  Filter handler
  const handleFilterUpdate = (currentValue) => {
    setFilter(currentValue);
  }


  return (
    <div>
      <h1>Phonebook</h1>
      < Filter data={persons} onFilterUpdate={handleFilterUpdate} />
      <h2>Add a new</h2>
        < PersonForm data={persons} onUpdate={handleUpdate} />
      <div>
        <h2>Numbers</h2>
        < Persons list={persons} filter={filter} />
      </div>
    </div>
  );
};

export default App;
