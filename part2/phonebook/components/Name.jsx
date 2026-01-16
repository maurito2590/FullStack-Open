import Persons from "./Persons";

// Component
const Name = ({name, number, onDelete}) => {

  return (
    <div>
      <p>
        <strong>
          {name},  {number}
        </strong>
        <button onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

 export default Name