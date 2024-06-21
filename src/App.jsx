import { useState } from "react"
import Header from "./components/Header"
import IPDataCard from "./components/IPDataCard"
import Map from "./components/Map"

function App() {

  const [ip, setIp] = useState(null)
  const [location, setLocation] = useState(null)
  const [timezone, setTimezone] = useState(null)
  const [isp, setIsp] = useState(null)
  const [error, setError] = useState(null)
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)

  const handleGeolocation = () => {
    const APIKey = 'at_ve4VTIunPfKRz7pVaVzJxrtyKkZB3'
    const IPGeolocationAPI = `https://geo.ipify.org/api/v2/country,city?apiKey=${APIKey}&ipAddress=${ip}`

    fetch(IPGeolocationAPI)
      .then(response => response.json())
      .then(data => {
        if(data){
          const city = data.location.city
          const province = data.location.region
          setLocation(`${city}, ${province}`)

          setTimezone(data.location.timezone)
          setIsp(data.isp)

          setError(false)

          setLat(data.location.lat)
          setLng(data.location.lng)
        }
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
  }

  return (
    <>
      <Header
        setIp={setIp}
        setError={setError}
        handleGeolocation={handleGeolocation}
        error={error}
        ip={ip}
      />

      <IPDataCard
        ip={ip}
        location={location}
        timezone={timezone}
        isp={isp}
        error={error}
      />

      <Map
        ip={ip}
        lat={lat}
        lng={lng}
      />
    </>
  )
}

export default App
