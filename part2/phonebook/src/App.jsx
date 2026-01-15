import { useState } from "react";
import Persons from "../components/Persons";
import PersonForm from "../components/PersonForm";
import Filter from "../components/Filter";

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
