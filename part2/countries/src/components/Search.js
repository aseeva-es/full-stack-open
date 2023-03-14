
export default function Search({ onChange, value }){
    return(
        <div>
       Find countries <input type = 'search' onChange={onChange} value = {value}></input>
        </div>
    )
}