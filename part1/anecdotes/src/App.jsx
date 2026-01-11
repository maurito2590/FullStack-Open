import { useState } from 'react'


const Buttons = ({next, vote}) => {

  const text = ['Vote', 'Next anecdote'];

  return (
   
    <div>
      <button onClick={vote}>
        {text[0]}
      </button>
      <button onClick={next}>
        {text[1]}
      </button>
    </div>
  )
};


const Most = ({anecdote, count}) => {

  let index = 0;
  let max = count[0];

  for (let i = 1; i < count.length; i++) {
    if (count[i] > max) {
      max = count[i];
      index = i;
    }
  }

  console.log(max)
  console.log(anecdote[index])

  if (max === 0) {
    
    return ( 
      <p>
        <strong>
          No votes yet
        </strong>
      </p>     
    )
  }

  return (
    <>
    <h2>
      Anecdote with most votes
    </h2>
    <p>
      {anecdote[index]}
    </p>
    <p>
      Has {max} votes
    </p>
    </>
  )

};




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  const [selected, setSelected] = useState(0);
  const [current, setCurrent] = useState(0)
  
  
  const arr = new Array(anecdotes.length).fill(0);
  const [voted, setVoted] = useState(arr)
  
  const handleClickNext = () => {

    const randomNum = () => {

      let random = 0

      do {

        random = Math.floor(Math.random() * anecdotes.length)
      } while (random === current);

      setCurrent(random);
      return random;

    } 
  
    setSelected(randomNum);
  }


  const handleClickVotes = () => {

    const votes = [...voted]
    votes[selected] += 1
    setVoted(votes)
  }

  return (

    <div>
      <h2>
        Anecdote of the day
      </h2>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        Has {voted[anecdotes.indexOf(anecdotes[selected])]} votes
      </p>
      < Buttons next={handleClickNext} vote={handleClickVotes} />
      < Most anecdote={anecdotes} count={voted} />
    </div>
  )
}

export default App
