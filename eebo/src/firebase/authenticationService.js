import "../CSSFolder/signIn.css"
import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"

export function SignIn() {
    return (
      <section id="signInContainer">
        <h2 id="eeboText" class="signInText">EEBO</h2>
        <h2 class="signInText" id="subHeadline">A place for everything</h2>
        <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())} id="signInButton">
          Sign In
         </button>
      </section>
    )
  }
  
  export function SignOut() {
    const photoURL = auth.currentUser.photoURL
    return (
      <div>
        <button onClick={() => signOut(auth)} id="signOutButton">Sign Out</button>
      </div>
    )
  }
  
  export function useAuthentication() {
    const [user, setUser] = useState(null)
    useEffect(() => {
      return auth.onAuthStateChanged((user) => {
        user ? setUser(user) : setUser(null)
      })
    }, [])
    return user
  }