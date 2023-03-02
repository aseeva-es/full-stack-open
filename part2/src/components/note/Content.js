import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((sum, num )=>sum + num.exercises, 0);
    return (
      <div>
      {
       parts.map((part) =>
        <Part key = {part.id} title={part.name} amount = {part.exercises}/>)
      }
      <div> <b>Total of { total } exercises.</b></div>
      </div>
    
    );
  };

  export default Content;