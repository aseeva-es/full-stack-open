import Button from "./Button";

const Person = ({name, number, onDeletePerson, person}) => {
    return(
      <div>
        <span name = {name} number = {number}>
        {name} {number}
      </span> 
      <span>
      <Button onDeletePerson={onDeletePerson} person = {person}/>
      </span>
      </div>
      
    )
}

export default Person;