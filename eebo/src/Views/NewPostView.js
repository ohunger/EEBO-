import "../CSSFolder/newPost.css"
import { useEffect, useState } from "react"
import { createPost } from "../firebaseServices/postServices"
/**
 * view rendered when user wants to create a new post
 * @param {} param0
 * @returns
 */
export function NewPostView({ addPost, cancel }) {
  const [price, setPrice] = useState("")
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [uploadedImage, setUploadedImage] = useState()

  function createNewPost(e) {
    e.preventDefault()
    createPost(itemName, price, description, "url here")
  }

  return (
    <form id="newPostForm" onSubmit={createNewPost}>
      <input
        id="pictureInput"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={(e) => setUploadedImage(e.target.value)}
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
      <button id="cancelButton">Cancel</button>
    </form>
  )
}