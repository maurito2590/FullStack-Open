// Make header
const Header = (props) => {

  console.log('Rendered!', props)

  return (
    <>
    <h1>
      {props.course}
    </h1>
    </>
  )
}


// Make *Content* component
const Content = (props) => {
  
  console.log(props)

  return (
    <div>
      <p>
      {props.parts[0].name}, {props.parts[0].exercises}
      </p>
      <p>
      {props.parts[1].name}, {props.parts[1].exercises}
      </p>
      <p>
      {props.parts[2].name}, {props.parts[2].exercises}
      </p>
    </div>
  )
}


//Make *Total* component
const Total = (props) => {
  
  console.log('Total', props)

  return (

    <p>
      Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>

  )
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
    
      {
        name: 'Using props to pass data',
        exercises: 7
      },
    
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  


    

  return (
    <div>
      < Header 
      course = {course.name} 
      />
       <Content 
      parts = {course.parts}
      />
      <Total 
      parts = {course.parts}
      />
    </div>

    
  )
}

export default App