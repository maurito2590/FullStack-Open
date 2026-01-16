import Name from "./Name";

// Component
const Persons = ({list, filter, onRemove}) => {

  const filtered = list.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

  const handleDelete = person => {

    if (window.confirm(`Delete ${person.name} ?`)) {
      onRemove(person)
    }
  }

  return (
    <div>
      {filtered.map(item => (
      < Name 
        key={item.id} 
        name={item.name} 
        number={item.number}
        onDelete={() => handleDelete(item)} />
    ))}
    
    </div>
  );
};

 export default Persons;