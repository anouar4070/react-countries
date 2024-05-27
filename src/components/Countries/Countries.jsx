// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const Countries = () => {
//   const [countries, setCountries] = useState([]);
//   const getAllCountries = async () => {
//     try {
//       const response = await axios.get("https://restcountries.com/v3.1/all");
//       setCountries(response.data);
//     } catch (error) {
//       console.error({ message: "error", error });
//     }
//   };


//   useEffect(() => {
//     getAllCountries();
//   }, []);

//   return (
  
//   <div>
    
 
//     <h1>List of Countries</h1>
//     {countries.map((countrie) => (
//         <div key={countrie.name.official}>
//           <h2> {countrie.name.official}</h2>
//           <h2>Capital: {countrie.capital}</h2>
          

//           <img
//           alt={countrie.name}
//           src={countrie.flags.png} 
//          />
        
//         </div>
//       ))}
//   </div>
   
//   )
// }

// export default Countries


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error({ message: 'error', error });
      }
    };

    getAllCountries();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); 
    setSelectedCountry(null); 
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>List of Countries</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {selectedCountry ? (
        <div key={selectedCountry.name.official}>
          <h2>{selectedCountry.name.official}</h2>
          <h2>Capital: {selectedCountry.capital}</h2>
          <img alt={selectedCountry.name} src={selectedCountry.flags.png} />
        </div>
      ) : (
        <ul>
          {countries
            .filter((country) =>
              country.name.common.toLowerCase().includes(searchTerm)
            )
            .map((country) => (
              <li key={country.name.official}>
                {country.name.common} &nbsp;
                <button onClick={() => handleCountryClick(country)}>
                  View Details
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;

