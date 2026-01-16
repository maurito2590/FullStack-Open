import { useState, useEffect } from "react";
import Persons from "../components/Persons";
import PersonForm from "../components/PersonForm";
import Filter from "../components/Filter";
import personService from "../services/persons"

const App = () => {
  const [ persons, setPersons ] = useState([]);

  useEffect(() => {
    
    personService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
      })
  }, [])

  const [ filter, setFilter] = useState('')

  // Data handler
  const handleUpdate = (personObject) => {
    personService
      .create(personObject)
      .then(newPerson => {
        setPersons(prevPerson => prevPerson.concat(newPerson))
      })
  }

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
