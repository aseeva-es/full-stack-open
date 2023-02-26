const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const Part = ({title, amount}) => {
  return (
    <>
      <p>
        {title} {amount}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
    {
     parts.map((part, i) => <Part key = {i} title={part.name} amount = {part.exercises}/>)
    }
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <>
      <p> Number of exercises
         { parts[0].exercises + parts[1].exercises + parts[2].exercises }</p>
    </>
  );
};

const App = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const course = "Half Stack application development";
  return (
    <div>
      <Header title={course} />
      <Content parts = {parts}></Content>

      <Total parts = {parts} />
    </div>
  );
};
export default App;
