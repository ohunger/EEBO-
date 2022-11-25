const { db } = require("../firebase/firebaseConfig")
const {
  getFirestore,
  collection,
  getDocs,
  query,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
} = require("firebase/firestore")

const POSTS_COLLECTION_NAME = "posts"

/**
 * fetches all posts in the "posts" collection
 */
export async function fetchAllPosts() {
  const querySnapshot = await getDocs(collection(db, POSTS_COLLECTION_NAME))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data())
  })
}
