import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Name handle
  const handleNameChange = (e) => setNewName(e.target.value);
  const names = persons.map((p) => p.name.toLowerCase());


  // Number handle
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const numbers = persons.map((p) => p.number);


  //  Filter handle
  const handleFilter = (e) => setFilter(e.target.value);
  const filtered = persons.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));




  // logs para debug
  console.log('filtered :>> ', filtered);




  const capitalizedName = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: capitalizedName(newName),
      number: newNumber,
    };

    let isName = names.includes(personObject.name.toLowerCase());
    let isNumber = numbers.includes(personObject.number);

    if (personObject.name === "" || personObject.number === "") {
      alert("Empty fields!!!");
      return;
    }
    if (isName) {
      alert(`${personObject.name} is already added to phonebook`);
      return;
    }
    if (isNumber) {
      alert(`${personObject.number} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with:
        <input type="text" onChange={handleFilter} />
      </div>
      <div>
        <h2>Add a new</h2>
        <form onSubmit={addPerson}>
          <div>
            Name:
            <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            Number:
            <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        {filtered.map((p) => (
          <p key={p.id}>
            <strong>
              {p.name}, {p.number}
            </strong>
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
