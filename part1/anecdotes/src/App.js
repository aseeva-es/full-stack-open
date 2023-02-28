import { useState } from 'react'


const Heading = ({ text }) => <h3>{text}</h3>

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
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({});

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const handleClick = () =>{
   const random = getRandomIntInclusive(0, anecdotes.length - 1);
   setSelected(random);
  }

  const handleVote = () => {
    const index = selected;
    const copy = { ...votes, [index]: (votes[index] || 0) + 1 }
    setVotes(copy);
  }

 

  const getWinner = (votes) => {
    const keys = Object.keys(votes);
    let winIndex;
    let winVotes=0;
    for (let i = 0; i < keys.length; i++){
      if(votes[keys[i]] > winVotes){
      winIndex = keys[i];
      winVotes = votes[keys[i]];
      }
    }  
    return winIndex;
  }

  return (
    <>
    <Heading text = 'Anecdote of the day'/>
    <div>
      {selected}. { anecdotes[selected] }
    </div>
      <div>has { votes[selected] || 0} votes</div>
    <button onClick = {handleVote}>Vote</button>
      <button onClick = {handleClick}>Next anecdot</button>
      <Heading text = 'Anecdote with most votes'/>
      <div>{ anecdotes[getWinner(votes)] }</div>
      <div>has { votes[getWinner(votes)] || 0} votes</div>
    </>
  )
}


export default App
