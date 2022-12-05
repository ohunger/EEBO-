import { React, useState } from "react"
import { config } from "../config"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"

export function MapContainer({ postTitle, latitude, longitude }) {
  const mapStyles = {
    height: "50vh",
    width: "100%",
    borderRadius: "20px",
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
    <LoadScript googleMapsApiKey={config.googleMapsApIKey}>
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
