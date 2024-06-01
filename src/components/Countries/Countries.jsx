import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [segment, setSegment] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const searchInput = useRef("");
  const region = useRef("");

  const getAllCountries = async () => {
    try {
      const result = await axios.get(
        `https://restcountries.com/v3.1/${segment}`
      );

      if (result.status === 200) setCountries(result.data);
    } catch (error) {
      console.error({ message: "error", error });
    } finally {
      setIsLoading(false);
    }
  };

  const SearchCountries = async (e) => {
    e.preventDefault();
    let search = searchInput.current.value;

    if (search === "") {
      alert("Please Write Something");
      return;
    }
    setSegment(`name/${search}`);
    
  };

const searchByRegion = ()=>{
  let selectedRegion = region.current.value
if(selectedRegion=== "") {
  return
}

}
  const handleReset = () => {
    searchInput.current.value = "";
    region.current.value = "";
    setSegment("all");
  };

  useEffect(() => {
    setTimeout(() => {
      (async () => await getAllCountries())();
    }, 2000);
  }, [segment]);

  return (
    <>
      <div className="row my-5">
        <div className="col-md-8">
          <h1>List of Countries</h1>
        </div>
        <div className="col-md-4 text-right">
         

          <form className="d-flex" onSubmit={SearchCountries}>
          <select onChange={searchByRegion} ref={region} className="form-control mr-2" >
            <option value="">Select a region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
            <input
              ref={searchInput}
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />

            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>

            {segment !== "all" ? (
              <button
                className="btn btn-danger my-2 my-sm-0"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>

      <div className="row">
        {isLoading && (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        )}

        {!isLoading &&
          countries.map((country, index) => (
            <div className="col-md-4" key={index}>
              <div className="card my-2">
                <img
                  className="card-img-top"
                  src={country.flags.png}
                  style={{ height: "200px" }}
                  display="block"
                  alt="Title"
                />
                <div className="card-body" style={{ height: "150px" }}>
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
