// Component
const Filter = ({onFilterUpdate}) => {

  const handleFilter = (e) => {
    const newValue = e.target.value
    onFilterUpdate(newValue);
  }

  return (
    <div>
      Filter show with:
      <input type="text" onChange={handleFilter} />
    </div>
  );
};

 export default Filter;