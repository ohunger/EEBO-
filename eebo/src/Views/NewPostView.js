import "../CSSFolder/newPost.css"
import Geocode from "react-geocode"
import { useState } from "react"
import { LoadingIndicator } from "./LoadingIndicator"
import { createPost } from "../firebaseServices/postServices"
/**
 * view rendered when user wants to create a new post
 * @param {} param0
 * @returns
 */
export function NewPostView({ addPost, cancel, setWritingFalse }) {
  const [price, setPrice] = useState("")
  const [address, setAddress] = useState("")
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [uploadedImage, setUploadedImage] = useState()
  const [promiseInProgress, setPromiseInProgress] = useState(false)

  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey("AIzaSyCa1tGEne5TA_U1ILd3sYSrhH9K95V3Pes")

  // set response language. Defaults to english.
  Geocode.setLanguage("en")

  // set location_type filter . Its optional.
  // google geocoder returns more that one address for given lat/lng.
  // In some case we need one address as response for which google itself provides a location_type filter.
  // So we can easily parse the result for fetching address components
  // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
  // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
  Geocode.setLocationType("ROOFTOP")

  async function createNewPost(e) {
    e.preventDefault()
    let anyFieldEmpty = checkForEmptyField()
    if (anyFieldEmpty) {
      alert("fill in all fields")
      return
    }
    setPromiseInProgress(true)
    await Geocode.fromAddress(address).then(
      async (response) => {
        const { lat, lng } = response.results[0].geometry.location
        await createPost(itemName, price, description, uploadedImage, lat, lng)
      },
      (error) => {
        console.error(error)
      }
    )
    setPromiseInProgress(false)
    setWritingFalse()
  }

  function checkForEmptyField() {
    return (
      price.length === 0 ||
      address.length === 0 ||
      itemName.length === 0 ||
      description.length === 0 ||
      uploadedImage === null
    )
  }

  function cancelPosting(e) {
    e.preventDefault()
    setWritingFalse()
  }

  if (promiseInProgress) {
    return <LoadingIndicator />
  } else {
    return (
      <form id="newPostForm" onSubmit={createNewPost}>
        <input
          id="pictureInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => setUploadedImage(e.target.files[0])}
          required
        />
        <input
          id="itemName"
          placeholder="item name"
          type="text"
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <textarea
          id="description"
          placeholder="description"
          rows={8}
          cols={200}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          id="price"
          placeholder="price"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          id="pickupAddress"
          placeholder="pickup address e.g 1 LMU Drive, 90045, CA"
          rows={5}
          cols={200}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <div id="buttons">
          <button id="postButton" onClick={createNewPost}>
            Post
          </button>
          <button id="cancelButton" onClick={cancelPosting}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}
