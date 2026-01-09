import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
    {text}
    </button>
  )
};


const Statics = ({total, name}) => <p>{name}: {total}</p>


const App = () => {

  // Guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClickGood = () => {
    const updateGood = good + 1;
    console.log('Good: ', updateGood);
    setGood(updateGood);
  };

  const handleClickBad = () => {
    const updateBad = bad + 1;
    console.log('Bad: ', updateBad);
    setBad(updateBad);
  };

  const handleClickNeutral = () => {
    const updateNeutral = neutral + 1;
    console.log("Neutral: ", updateNeutral);
    setNeutral(updateNeutral);
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={handleClickGood} text={"good"} />
      <Button handleClick={handleClickNeutral} text={"neutral"} />
      <Button handleClick={handleClickBad} text={"bad"} />
      <h2>Statics</h2>
      < Statics total={good} name={'Good'} />
      < Statics total={neutral} name={'Neutral'} />
      < Statics total={bad} name={'Bad'} />
    </div>
  );
};

export default App;
