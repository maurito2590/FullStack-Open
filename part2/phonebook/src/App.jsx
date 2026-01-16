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

  // Add handler
  const handleAdd = (personObject) => {

    personService
      .create(personObject)
      .then(newPerson => {
        setPersons(prevPerson => prevPerson.concat(newPerson));
      })
  }

  // Remove handler
  const handleRemove = person => {

    personService
      .remove(person.id)
      .then((data) => {
        setPersons(persons.filter(item => item.id !== data.id))
      })
  }

  // Update handler
  const handleUpdate = personId => {

    const personToChange = persons.find((element) => element.name === personId.name)

    personService
      .update(personToChange.id, personId)
      .then(() => {
        return personService.getAll();
      })
      .then(data => {
        setPersons(data)
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
        < PersonForm data={persons} onAdd={handleAdd} onUpdate={handleUpdate} />
      <div>
        <h2>Numbers</h2>
        < Persons list={persons} filter={filter} onRemove={handleRemove} />
      </div>
    </div>
  );
};

export default App;
