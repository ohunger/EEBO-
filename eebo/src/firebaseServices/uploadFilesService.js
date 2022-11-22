import uuid from "react-uuid"
import { useState } from "react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const storage = getStorage()

/**
 * Function uploads file to firebase storage.
 * @param {*} file : the file to upload
 * @param {*} setDownloadUrl : a function that sets the download url
 * @param {*} setUploadError: useState function that sets the error, if any, that
 * occured during upload
 */
export function uploadFile(file, setDownloadUrl, setUploadError) {
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  }

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, "images/" + uuid() + "/" + file.name)
  const uploadTask = uploadBytesResumable(storageRef, file, metadata)

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log("Upload is " + progress + "% done")
      switch (snapshot.state) {
        case "paused":
          setUploadError("Upload is paused")
          console.log("Upload is paused")
          break
        case "running":
          console.log("Upload is running")
          break
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          setUploadError(error.message)
          break
        case "storage/canceled":
          // User canceled the upload
          setUploadError(error.message)
          break

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          setUploadError(error.serverResponse)
          break
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setDownloadUrl(downloadURL)
        console.log("File available at", downloadURL)
      })
    }
  )
}
