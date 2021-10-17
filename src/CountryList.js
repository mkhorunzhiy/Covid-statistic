const CountryList = ({ data, searchTerm, setActive, setUnicCountry   }) => {

  let i= 1;//numbers of countries

  return (
    data.Countries.filter( value => {
      if (searchTerm === ""){
        return value
      } else if (value.Country.startsWith(searchTerm)){//для нечеткого поиска includes(searchTerm)
        return value
      }
      return false;
        // return searchTerm === "" || value.Country.startsWith(searchTerm);
    }).map(value => (
      <tr onClick={() => {setActive(true); setUnicCountry(value);}} key={value.Country}>
          <td className="num-column">{ i++ } </td>
          <td className="name">{ value.Country }</td>
          <td className="total-confirmed">{ value.TotalConfirmed }</td>
        </tr>))
  );
}

  export default CountryList;