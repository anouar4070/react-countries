// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const Countries = () => {
//   const [countries, setCountries] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const searchInput = useRef("");

//   const getAllCountries = async () => {
//     try {
//       const result = await axios.get("https://restcountries.com/v3.1/all");

//       if (result.status === 200) setCountries(result.data);
//     } catch (error) {
//       console.error({ message: "error", error });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const SearchCountries = async (e) => {
//     e.preventDefault();
//     let search = searchInput.current.value;

//     if (search === "") {
//       alert("Please Write Something");
//       return;
//     }
//     try {
//       const result = await axios.get(
//         `https://restcountries.com/v3.1/name/${search}`
//       );

//       if (result.status === 200) setCountries(result.data);
//     } catch (error) {
//       console.error({ message: "error", error });
//     }
//   };

//   const handleReset = () => {
//     if (searchInput.current) {
//       searchInput.current.value = "";
//       getAllCountries();
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       (async () => await getAllCountries())();
//     }, 2000);
//   }, []);

//   return (
//     <>
//       <div className="row my-5">
//         <div className="col-md-8">
//           <h1>List of Countries</h1>
//         </div>
//         <div className="col-md-4 text-right">
//           <form className="d-flex" onSubmit={SearchCountries}>
//             <input
//               ref={searchInput}
//               className="form-control me-sm-2"
//               type="search"
//               placeholder="Search"
//             />

//             <button className="btn btn-secondary my-2 my-sm-0" type="submit">
//               Search
//             </button>

//             <button
//               className="btn btn-danger my-2 my-sm-0"
//               type="button"
//               onClick={handleReset}
//             >
//               Reset
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="row">
//         {isLoading && (
//           <button class="btn btn-primary" type="button" disabled>
//             <span
//               class="spinner-border spinner-border-sm"
//               role="status"
//               aria-hidden="true"
//             ></span>
//             Loading...
//           </button>
//         )}

//         {!isLoading &&
//           countries.map((country) => (
//             <div className="col-md-4">
//               <div className="card my-2">
//                 <img
//                   className="card-img-top"
//                   src={country.flags.png}
//                   style={{ height: "200px" }}
//                   display="block"
//                   alt="Title"
//                 />
//                 <div className="card-body" style={{ height: "150px" }}>
//                   <h4 className="card-title">{country.name.official} </h4>
//                   <p className="card-text">Region: {country.region} </p>
//                   <p className="card-text">Capital: {country.capital}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default Countries;
