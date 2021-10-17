const Details = ({active, setActive, unicCountry}) => {
  //console.log(unicCountry.Date); чтобы проверить день обновления статистики

//onClick={() => setActive(false)} для дива, чтобы окно пропадало при нажатии по всей страничке
  return ( 
    <div className={active ? "details active" : "details"} >
      <div className={active ? "details-content active" : "details-content"} onClick={event => event.stopPropagation}>
        <h2 className="detail-name">{unicCountry.Country}</h2>
        <table className="detail-table">
          <tbody>
          <tr>
            <td><i className="fas fa-heartbeat"/></td>
            <td>Total Confirmed</td>
            <td>{unicCountry.TotalConfirmed}</td>
          </tr>
          <tr>
            <td><i className="fas fa-skull"/></td>
            <td>Total Deaths</td>
            <td>{unicCountry.TotalDeaths}</td>
          </tr>
          <tr>
            <td><i className="fas fa-file-medical"/></td>
            <td>Total Recovered</td>
            <td>{unicCountry.TotalRecovered}</td>
          </tr>
        </tbody>
        </table>
        <button onClick={() => setActive(false)}>OK</button>
        </div>
      </div>
    );
}
 
export default Details;