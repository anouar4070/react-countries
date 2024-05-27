import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const searchInput = useRef("");

  const getAllCountries = async () => {
    try {
      const result = await axios.get("https://restcountries.com/v3.1/all");

      if (result.status === 200) setCountries(result.data);
    } catch (error) {
      console.error({ message: "error", error });
    }
  };

  const SearchCountries = async (e) => {
    e.preventDefault();
    let search = searchInput.current.value;

    if (search === "") {
      alert("Please Write Something");
      return;
    }
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/name/${search}`
      );

      if (result.status === 200) setCountries(result.data);
    } catch (error) {
      console.error({ message: "error", error });
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <div className="row my-5">
        <div className="col-md-8">
          <h1>List of Countries</h1>
        </div>
        <div className="col-md-4 text-right">
          <form className="d-flex" onSubmit={SearchCountries}>
            <input
              ref={searchInput}
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
            <button className="btn btn-danger my-2 my-sm-0" type="button">
              Reset
            </button>
          </form>
        </div>
      </div>
      <div class="row">
        {countries.map((country) => (
          <div className="col-md-4">
            <div className="card my-2">
              <img
                className="card-img-top"
                src={country.flags.png}
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">{country.name.official} </h4>
                <p className="card-text">Region: {country.region} </p>
                <p className="card-text">Capital: {country.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;

// 100-199
//& 200-299
// 300-399
//& 400-499
//& 500-599