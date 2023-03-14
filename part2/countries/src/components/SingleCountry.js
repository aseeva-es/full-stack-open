export default function SingleCountry({ country }){
    console.log('single', country)
    return(
        <>
        <h2>{ country.name.common }</h2>
            <div>Capital { country.capital[0] }</div>
            <div>Area { country.area }</div>
                <h3>Languages</h3> 
                {
                Object.keys(country.languages || {}).map((language)=><li key = {language}>{country.languages[language]}</li>)}        
            <div className = 'flag'>{ country.flag }</div>
        </>
    )
}