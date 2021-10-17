import { useState } from "react";
import CountryList from "./CountryList";
import Details from "./Details";
import useFetch from "./useFetch";

const Home = () => {

  const [detailsActive, setDetailsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [unicCountry, setUnicCountry] = useState({});

  const { data, error, isPending  } = useFetch('https://api.covid19api.com/summary');

  return (
    <div className="home">
      <div className="header">
        <div className="logo">
          <img  src="Covid_symbol.png" alt="*Covid symbol here*" />
          <h1>STATISTIC</h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) =>{
              setSearchTerm(event.target.value)
            }}
          />
          <i className="fa fa-search" aria-hidden="true"/>
        </div>
      </div>
      <div className="countries">
        <Details active ={detailsActive} setActive ={setDetailsActive} unicCountry={unicCountry}/>
        <table className="country-list">
          <thead>
            <tr>
              <th id="first-num-column">№</th>
              <th id="name">Country</th>
              <th id="total">Total Confirmed</th>
            </tr>
          </thead>
          <tbody>
            { error && <p>{ error }</p> }
            { isPending && <p>Loading...</p> }
            { data && < CountryList data={data} searchTerm={searchTerm} setActive={setDetailsActive} setUnicCountry={setUnicCountry} />}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default Home;
