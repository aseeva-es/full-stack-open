import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('handleClick')
    setGood( good + 1);
  }
  const handleNeutralClick = () => {
    console.log('handleClick')
    setNeutral( neutral + 1);
  }
  const handleBadClick = () => {
    console.log('handleClick')
    setBad( bad + 1);
  }


  return (
    <div>
        <h1>Give feedback</h1>
        <Button onClick = {handleGoodClick} text = "Good"/>
        <Button onClick = {handleNeutralClick} text = "Neutral"/>
        <Button onClick = {handleBadClick} text = "Bad"/>
        <h3>Statistics</h3>
        <p>Good { good }</p>
        <p>Neutral { neutral }</p>
        <p>Bad { bad }</p>

     
    </div>
  )
}

export default App