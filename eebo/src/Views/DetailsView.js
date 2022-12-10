import "../CSSFolder/details.css"
import {useState} from 'react';
import { MapContainer } from "../GooleMaps/goolgeMap"

/**
 * View shows details about a post
 */

export function DetailsView({ goToPage, postForDetails }) {
  const [buttonText, setButtonText] = useState('Buy $'+ postForDetails.price);
  function setPageToHome() {
    goToPage("home")
  }

  function openUber() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const userLatitude = position.coords.latitude
          const userLongitude = position.coords.longitude
          const uberUrl = `https://m.uber.com/ul/?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]=${userLatitude}&pickup[longitude]=${userLongitude}&pickup[nickname]=Me&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=${postForDetails.latitude}&dropoff[longitude]=${postForDetails.longitude}&dropoff[nickname]=${postForDetails.title}&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`
          window.open(uberUrl, "_blank", "noopener,noreferrer")
          console.log(position)
        },
        function (error) {
          alert("error occured " + error.message)
          console.error("Error Code = " + error.code + " - " + error.message)
        }
      )
    } else {
      alert("enable location to use uber services")
    }
  }
  function handleClick() {
    setButtonText('Bought!');
    setTimeout(() => {
      setButtonText('Buy $'+ postForDetails.price);
      }, 1500);
      

  }

  return (
    <div class="container">
      <div class="toppane">
        <h2 id="EEBOtitle">EEBO Market</h2>
        <button onClick={setPageToHome} id="backButton">
          Back
        </button>
      </div>
      <div class="leftpane">
        <h2 id="postTitle">{postForDetails.title}</h2>
        <img src={postForDetails.postImage} id="image" />
        <button onClick ={handleClick} id="buyButton">{buttonText}</button>
      </div>
      <div class="middlepane">
        <h2>Description</h2>
        <article>{postForDetails.description}</article>
      </div>
      <div class="rightpane">
        <div id="googleMapsWidget">
          <MapContainer
            postTitle={postForDetails.title}
            latitude={postForDetails.latitude}
            longitude={postForDetails.longitude}
          />
        </div>
        <div id="uberWidget" onClick={openUber}>
          <h1 id="useUberText">Get there with uber</h1>
        </div>
      </div>
    </div>
  )
}
