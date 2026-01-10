import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
    {text}
    </button>
  )
};


const Statics = ({static: s}) => {

  const total = Object.values(s).reduce((acc, val) => acc + val, 0)
  const arr = Object.entries(s)
  const average = arr[0][1] * 1 + arr[2][1] * -1

  const names = Object.keys(s).map(key => key.charAt().toUpperCase()+key.slice(1)+': ');
  const count = Object.values(s)


  if (total === 0) {

    return (
      <p>
      No feedback given.
    </p>
    )
  }
    
    return (
      <div>
        <p>
          {names[0]} {count[0]}
        </p>
        <p>
          {names[1]} {count[1]}
        </p>
        <p>
          {names[2]} {count[2]}
        </p>
        <p>
          Total: {total}
        </p>
        <p>
          Average: {average / total}
        </p>
        <p>
          Positive: {count[0] / total * 100}
        </p>

      </div>
  )


}
  


const App = () => {

  // Guarda los clics de cada botón en su propio estado
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const [total, setTotal] = useState(0);


  const handleClickGood = () => {

    const updateGood = feedback.good + 1
    console.log('Good: ', updateGood)
    setFeedback({...feedback, good: updateGood})
  };

  const handleClickBad = () => {

    const updateBad = feedback.bad + 1;
    console.log('Bad: ', updateBad)
    setFeedback({...feedback, bad: updateBad});
    setTotal(total + 1);
  };

  const handleClickNeutral = () => {
    const updateNeutral = feedback.neutral + 1;
    console.log('Neutral:', updateNeutral)
    setFeedback({...feedback, neutral: updateNeutral});
    setTotal(total + 1);
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={handleClickGood} text={"Good"} />
      <Button handleClick={handleClickNeutral} text={"neutral"} />
      <Button handleClick={handleClickBad} text={"Bad"} />
      <h2>Statics</h2>
      < Statics static={feedback} />

    </div>
  );
};

export default App;
