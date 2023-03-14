
export default function getCountries(){
   return fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
}