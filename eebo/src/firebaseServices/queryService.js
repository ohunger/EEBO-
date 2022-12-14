import { Post } from "../Classes/post"

const { db } = require("../firebase/firebaseConfig")
const { collection, getDocs, query, where } = require("firebase/firestore")

const POSTS_COLLECTION_NAME = "posts"

/**
 * fetches all posts in the "posts" collection
 */
export async function fetchAllPosts() {
  const allPosts = []
  const querySnapshot = await getDocs(collection(db, POSTS_COLLECTION_NAME))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let data = doc.data()
    allPosts.push(
      new Post(
        doc.id,
        data.datePosted,
        data.description,
        data.postImage,
        data.price,
        data.title,
        data.userId,
        data.userName,
        data.latitude,
        data.longitude
      )
    )
  })

  return Object.entries(allPosts).map(([id, data]) => ({ id, ...data }))
}

export async function searchPosts(userQuery) {
  const matchedPosts = []
  const firebaseQuery = query(
    collection(db, POSTS_COLLECTION_NAME),
    where("title", "==", userQuery)
  )

  const querySnapshot = await getDocs(firebaseQuery)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let data = doc.data()
    matchedPosts.push(
      new Post(
        doc.id,
        data.datePosted,
        data.description,
        data.postImage,
        data.price,
        data.title,
        data.userId,
        data.userName,
        data.latitude,
        data.longitude
      )
    )
  })

  return Object.entries(matchedPosts).map(([id, data]) => ({ id, ...data }))
}
