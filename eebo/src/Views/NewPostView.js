import "../CSSFolder/newPost.css"
import { useEffect, useState } from "react"
import { LoadingIndicator } from "./LoadingIndicator"
import { trackPromise } from "react-promise-tracker"
import { createPost } from "../firebaseServices/postServices"
/**
 * view rendered when user wants to create a new post
 * @param {} param0
 * @returns
 */
export function NewPostView({ addPost, cancel, setWritingFalse }) {
  const [price, setPrice] = useState("")
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [downloadURL, setDownloadUrl] = useState("")
  const [uploadedImage, setUploadedImage] = useState()
  const [promiseInProgress, setPromiseInProgress] = useState(false)

  async function createNewPost(e) {
    e.preventDefault()
    setPromiseInProgress(true)
    await createPost(itemName, price, description, uploadedImage, 33.97097, -148.41492)
    setWritingFalse()
    setPromiseInProgress(false)
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
        />
        <input
          id="itemName"
          placeholder="item name"
          type="text"
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          id="description"
          placeholder="description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          id="price"
          placeholder="price"
          type="text"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button id="postButton">Post</button>
        <button id="cancelButton" onClick={cancelPosting}>
          Cancel
        </button>
      </form>
    )
  }
}
