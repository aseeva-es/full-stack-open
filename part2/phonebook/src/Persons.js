import Person from "./components/Person";

const Persons =({ persons, searchInput }) => {
    return(
        <>
        {
            persons
            .filter((person) => person.name.toLowerCase().includes(searchInput))
            .map((person) => (
                <Person key={person.name} name = {person.name} number = {person.number} />
    
            ))
        }
        </>
    )
}

export default Persons;