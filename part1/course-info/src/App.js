
const Header = ({tittle}) => {
  return (
    <>
    <h1>{ tittle }</h1>
    </>
    )
  }

  const Content = ({tittle1, tittle2, tittle3, amount1, amount2, amount3}) => {
    return (
      <>
      <p> { tittle1 } { amount1 }</p>
      <p> { tittle2 } { amount2 }</p>
      <p> { tittle3 } { amount3 }</p>
      </>
    )
  }

  const Total = ({ num1, num2, num3}) => { 
    return (
      <>
      <p> Number of exercises { num1 + num2 + num3 }</p>
      </>
    )

  }
  const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
       <Header tittle={course} /> 
       <Content 
       tittle1 = {part1} amount1 = {exercises1}
       tittle2 = {part2} amount2 = {exercises2}
       tittle3 = {part3} amount3 = {exercises3}
       />
      <Total num1 = {exercises1} num2 ={exercises2}  num3={exercises3 }/>
    </div>
  )
}
export default App;
