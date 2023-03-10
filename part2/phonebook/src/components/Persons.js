import Person from "./Person";

const Persons =({ persons, searchInput, onDeletePerson, onChangeNumber }) => {
    return(
        <>
        {
            persons
            .filter((person) => person.name.toLowerCase().includes(searchInput))
            .map((person) => (
                <Person 
                key={person.name}
                name = {person.name}
                number = {person.number} 
                onDeletePerson={onDeletePerson}
                onChangeNumber ={onChangeNumber}
                person={person}/>
                
            ))
        }
        </>
    )
}

export default Persons;