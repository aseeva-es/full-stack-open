const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
const Part = ({ title, amount }) => {
  return (
    <>
      <p>
        {title} {amount}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part title={props.part1} amount={props.exercises1} />
      <Part title={props.part2} amount={props.exercises2}></Part>
      <Part title={props.part3} amount={props.exercises3}></Part>
    </>
  );
};

const Total = ({ num1, num2, num3 }) => {
  return (
    <>
      <p> Number of exercises {num1 + num2 + num3}</p>
    </>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header title={course} />
      <Content 
      part1 = {part1.name}
      part2 = {part2.name}
      part3 = {part3.name}
      exercises1 = {part1.exercises}
      exercises2 = {part2.exercises}
      exercises3 = {part3.exercises}
      ></Content>

      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises} />
    </div>
  );
};
export default App;
