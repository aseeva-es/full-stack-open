
const Button = ({ person, onDeletePerson }) =>{
    
    return(
        <button onClick = {()=> onDeletePerson(person) }>Delete</button>
    )
}

export default Button;