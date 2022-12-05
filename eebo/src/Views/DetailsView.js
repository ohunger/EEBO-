import "../CSSFolder/details.css"
import { MapContainer } from "../GooleMaps/goolgeMap"

/**
 * View shows details about a post
 */

export function DetailsView({ goToPage, postForDetails }) {
  function setPageToHome() {
    goToPage("home")
  }

  return (
    <div class="container">
      <div class="toppane">
        <h2 id="postTitle">{postForDetails.title}</h2>
        <button onClick={setPageToHome} id="backButton">
          Back
        </button>
      </div>
      <div class="leftpane">
        <img src={postForDetails.postImage} id="image" />
        <button id="buyButton">Buy ${postForDetails.price}</button>
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
        <div id="uberWidget">
          <h1>uber will show here</h1>
        </div>
      </div>
    </div>
  )
}
