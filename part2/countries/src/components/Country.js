import Button from "./Button";

export default function Country({ country, onShow }){
    return(
        <>
        <li>{country.name.common} <Button onClick = {() => onShow(country.name.common)}/></li>
        </>
    )
}