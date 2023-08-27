/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import Countries from "./components/Countries";
import Search from "./components/Search";
import "./App.css"

// api url
const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries)

  // fetchData method 
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      // call api
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data)
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  // handleRemoveCountry method 
  const handleRemoveCountry = (name) => {
    // filter data for remove country
    const filter = countries.filter((country) => country.name.common != name)
    setFilterCountries(filter)
  }
  // handleSearch method
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountries);
  }
  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filterCountries}  onRemoveCountry = {handleRemoveCountry}/>}
    </>
  );
}

export default App;
