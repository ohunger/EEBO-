import { React, useState } from "react"
//import { config } from "../config"
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api"

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

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCa1tGEne5TA_U1ILd3sYSrhH9K95V3Pes",
    libraries: ["geometry", "drawing"],
  })

  function seletItem(item) {
    setSelected(item)
  }

  if (isLoaded) {
    return (
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={postLocation.location}>
        <MarkerF
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
    )
  } else {
    return (
      <LoadScript googleMapsApiKey="AIzaSyCa1tGEne5TA_U1ILd3sYSrhH9K95V3Pes">
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={postLocation.location}>
          <MarkerF
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
}
