import Header from "./Header";


// Component
const Course = ({ course, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Header title={course} />
    </div>
  );
};

export default Course;
