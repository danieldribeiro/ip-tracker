import ErrorMessage from "../ErrorMessage"
import { Container } from "./styles"

import { FaGreaterThan } from 'react-icons/fa6'

export default function Header({ setIp, setError, handleGeolocation, ip, error }) {

  const handleIpAdress = (e) => {
    setIp(null)
    setError(null)

    setIp(e.target.value)
  }

  return (
    <Container>
      <h1>IP Adress Tracker</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search for any IP adress or domain" onChange={handleIpAdress} />
        <button onClick={handleGeolocation}><FaGreaterThan /></button>
      </div>
      {error && ip === null && <ErrorMessage title={`Whoops! It can't be empty...`} />}
      {error && ip !== null && <ErrorMessage title={`Something went wrong. Please try again.`} />}
    </Container>
  )
}
