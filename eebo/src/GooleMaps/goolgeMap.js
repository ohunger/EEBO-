import { React, useState } from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"

export function MapContainer({ postTitle, latitude, longitude }) {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  }

  const postLocation = {
    name: postTitle,
    location: {
      lat: latitude,
      lng: longitude,
    },
  }

  const [selected, setSelected] = useState({})

  function seletItem(item) {
    setSelected(item)
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyCa1tGEne5TA_U1ILd3sYSrhH9K95V3Pes">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={postLocation.location}>
        <Marker
          key={postLocation.name}
          position={postLocation.location}
          onClick={() => seletItem(postLocation)}
        />

        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}
