import Country from "./Country";
import SingleCountry from "./SingleCountry";

export default function CountriesList({ countries, searchInput }) {
  let filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(searchInput)
  );
  return (
    <div>
      {
      filteredCountries.length === 1 && (
        <SingleCountry
          key={filteredCountries[0].name.common}
          country={filteredCountries[0]}
          languages={filteredCountries[0].languages}
        ></SingleCountry>
      )
      }

      {
      filteredCountries.length > 10 && (
        <div>So many matches, specify another filter</div>
      )
      }
      
      {
      (filteredCountries.length > 1 && filteredCountries.length < 11) &&
        filteredCountries.map((country) => {
          return (
            <Country key={country.name.common} country={country}>
              {country.name.common}
            </Country>
          );
        })
        }
    </div>
  );
}
