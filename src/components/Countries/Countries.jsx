import React, { useState, useEffect } from "react";
import axios from "axios";


const Countries = () => {
  const [countries, setCountries] = useState([]);
 
  const getAllCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error({ message: "error", error });
    }
  };


  useEffect(() => {
    getAllCountries();
  }, []);

  

  return (
    <div >
      <h1>List of Countries</h1>
      
      <input
        type="text"
        placeholder="Search for a country..."
        className="mb-4"
     />

      <div class="container">
  <div class="row">
      {countries.map((country) => (
        <article  key={country.name.official} className="card col-md-4 mb-4 ">
          <img src={country.flags.png} className="card-img-top" alt={country.name} style={{height: '50%'}}/>
          <div className="card-body">
            <h5 className="card-title">{country.name.official}</h5>
            <p className="card-text">Capital: {country.capital}.</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </article>
      ))}
      </div>
    </div>
    </div>

  );
  
}

export default Countries


