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
        {" "}
        {title} {amount}{" "}
      </p>
    </>
  );
};

const Content = (props) => {
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header title={course} />
      <Content 
      part1 = {part1}
      part2 = {part2}
      part3 = {part3}
      exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3}
      ></Content>

      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  );
};
export default App;
