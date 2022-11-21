const { v4: uuidv4 } = require("uuid")
const { db, auth } = require("../firebase/firebaseConfig")
const { firebaseConfig, articleConverter } = require("../firebase/firebaseConfig")
const { initializeApp } = require("firebase/app")
const {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
} = require("firebase/firestore")

// ... and do the same for other services you need

const postsCollection = collection(db, "posts")

const { useState } = require("react")

export async function createPost(title, price, description, postImage) {
  // As this is just fake data for messing around, we'll throw in a quick
  // and unreliable database id. In a real app, the id should be generated
  // by the database itself (or you can use UUIDs).

  //save nft to firebase
  await addDoc(postsCollection, {
    id: uuidv4(),
    userId: auth.currentUser.uid,
    userName: auth.currentUser.displayName,
    title: title,
    price: price,
    description: description,
    postImage: postImage,
    date: new Date(),
  })
    .then(function (docRef) {
      console.log("new doc " + docRef.id)
    })
    .catch(function (firebaseError) {
      alert("error occured saving doc: " + firebaseError.message)
    })
  return { id: Math.random(), title, price, description, postImage, date: new Date() }
}

export async function fetchPosts() {}

export async function deleteArticle(postId) {
  await deleteDoc(doc(db, "posts", postId))
}
