import Part from './Part'

// Component
const Content = ({title, assign}) => {

    const total = assign.reduce((sum, val) => sum + val.exercises, 0)
    console.log('assign :>> ', assign);
  
  return (
    <div>
      <h3>
        {title}
      </h3>
      {assign.map(item => (
        < Part key={item.id} name={item.name} count={item.exercises} />
      ))}
      <p>
        <strong>
          Total of {total} exercises
        </strong>
      </p>
    </div>
  );
}


export default Content;