import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import getCountries from "./functions/getCountries";
import CountriesList from "./components/CountriesList";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    getCountries().then((data) => {
      console.log("countries", data);
      setCountries(data);
    });
  }, []);

  const onShow = (country) => {
    setSearchInput(country)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Countries</h2>
        <Search onChange={handleSearchInput} value={searchInput} />
        <CountriesList countries={countries} searchInput={searchInput} onShow = {onShow}/>
      </header>
    </div>
  );
}

export default App;
