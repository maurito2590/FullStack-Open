import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
    {text}
    </button>
  )
};


const StatisticLine = ({ text, value }) => (

<tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

)


const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  console.log('Total: ', total);

  if (total === 0) {
    return <p>No feedback given</p>
  }


  return (
    <div>
      <table>
        <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average.toFixed(1)} />
      <StatisticLine text="Positive" value={positive.toFixed(1) + ' %'} />
        </tbody>
      </table>
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
    setTotal(total + 1);
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
      <Button handleClick={handleClickNeutral} text={"Neutral"} />
      <Button handleClick={handleClickBad} text={"Bad"} />
      <h2>Statistics</h2>
      < Statistics {...feedback} />
    </div>
  );
};

export default App;
