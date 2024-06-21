import { Container } from "./styles"

export default function IPDataCard({ip, location, timezone, isp, error}){

  return(
    <Container className={error === false ? 'display' : ''}>
      <div className="data">
        <p>IP ADRESS</p>
        <h2>{ip}</h2>
      </div>

      <div className="data">
        <p>LOCATION</p>
        <h2>{location}</h2>
      </div>

      <div className="data">
        <p>TIMEZONE</p>
        <h2>UTC {timezone}</h2>
      </div>

      <div className="data">
        <p>ISP</p>
        <h2>{isp}</h2>
      </div>
    </Container>
  )
}