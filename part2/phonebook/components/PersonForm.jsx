import { useState } from "react";

// Component
const PersonForm = ({ data, onUpdate }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const names = data.map((item) => item.name.toLowerCase());
  const numbers = data.map((item) => item.number);

  // Normalized names
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
      id: data.length + 1,
    };

    // Validations
    if (personObject.name === "" || personObject.number === "") {
      alert(
        personObject.name === "" && personObject.number === ""
          ? "Empty fields!"
          : personObject.name === ""
          ? "Name field is empty"
          : "Number field is empty"
      );
      return;
    }

    if (names.includes(personObject.name.toLowerCase())) {
      alert(`${personObject.name} is already added to phonebook!`);
      return;
    }

    if (numbers.includes(personObject.number)) {
      alert(`${personObject.number} is already added to phonebook!`);
      return;
    }

    onUpdate(personObject);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          Number:
          <input
            type="text"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
