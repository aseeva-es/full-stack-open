import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => <p> {props.title} {props.value}</p>

const AllStats = ({ good, neutral, bad, total }) => {
  if( total === 0 ){
    return (
      <p>No feedback given</p>
      )
    } 
    const average = () => ((good - bad) / total); 
    const positive = () => (good * 100 / total ) + '%';
  return (
    <>
    <Statistics title = 'Good' value = { good } />
    <Statistics title = 'Neutral' value = { neutral } />
    <Statistics title = 'Bad' value = { bad } />
    <Statistics title = 'Total' value = { total }/>
    <Statistics title = 'Average' value = { average() } />
    <Statistics title = 'Positive' value = { positive() } s/>
    </>
  )
  
}


  
  

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
        <AllStats good = { good } neutral = {neutral} bad = { bad } total = {total}/>
       
    </div>
  )
}

export default App