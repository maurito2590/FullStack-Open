import Persons from "./Persons";

// Component
const Name = ({name, number}) => {

  return (
    <p>
      <strong>{name}, {number}</strong>
    </p>
  );
};

 export default Name