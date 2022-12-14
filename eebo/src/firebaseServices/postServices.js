import { Post } from "../Classes/post"

const { v4: uuidv4 } = require("uuid")
const { db, auth } = require("../firebase/firebaseConfig")
const { collection, addDoc, doc, deleteDoc } = require("firebase/firestore")
const { getStorage, ref, getDownloadURL } = require("firebase/storage")
const { uploadFile } = require("../firebaseServices/uploadFilesService")

// ... and do the same for other services you need

const storage = getStorage()
const postsCollection = collection(db, "posts")

export async function createPost(
  title,
  price,
  description,
  postImage,
  latitude,
  longitude
) {
  // As this is just fake data for messing around, we'll throw in a quick
  // and unreliable database id. In a real app, the id should be generated
  // by the database itself (or you can use UUIDs).
  //save nft to firebase
  let imagePath = await uploadFile(postImage)
  //delay until image is registered in firebase
  await new Promise((resolve) => setTimeout(resolve, 10000))

  getDownloadURL(ref(storage, imagePath))
    .then(async (url) => {
      await addDoc(postsCollection, {
        id: uuidv4(),
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        title: title,
        price: price,
        description: description,
        postImage: url,
        date: new Date(),
        latitude: latitude,
        longitude: longitude,
      })
        .then(function (docRef) {
          console.log("new doc " + docRef.id)
        })
        .catch(function (firebaseError) {
          alert("error occured saving doc: " + firebaseError.message)
        })
    })
    .catch((error) => {
      // Handle any errors
      console.log("error from firebase " + error)
      alert("error occured saving image: " + error)
    })

  return { id: Math.random(), title, price, description, postImage, date: new Date() }
}

export async function deleteArticle(postId) {
  await deleteDoc(doc(db, "posts", postId))
}
