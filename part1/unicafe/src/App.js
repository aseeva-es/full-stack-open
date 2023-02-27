import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
 

  const handleGoodClick = () => {
    const upgradeGood = good + 1;
    setGood( upgradeGood );
    setTotal( upgradeGood + neutral + bad);
  }
  const handleNeutralClick = () => {
    console.log('handleClick')
    const upgradeNeutral = neutral + 1;
    setNeutral(upgradeNeutral  );
    setTotal(upgradeNeutral + good +bad );
  }
  const handleBadClick = () => {
    const upgradeBad = bad + 1;
    setBad( upgradeBad );
    setTotal( upgradeBad + good + neutral);
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
        <p>Total { total }</p>
        <p>Average {(good - bad) / total}</p>
        <p>Positive { good * 100 / total } %</p>

     
    </div>
  )
}

export default App