import logo from "./logo.svg"
import { useEffect, useState } from "react"
import "./App.css"
import Nav from "./Views/Nav.js"
import { SignIn, SignOut, useAuthentication } from "./firebase/authenticationService"
import { HomeView } from "./Views/HomeView"
import { SearchBar } from "./Views/SearchBar"
import { NewPostView } from "./Views/NewPostView"
import { SinglePostView } from "./Views/SinglePostView"

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState(null)
  const [writing, setWriting] = useState(false)

  const user = useAuthentication()

  return (
    <div className="App" id="App">
      {user && (
        <header>
          {user && (
            <button onClick={() => setWriting(true)} id="newPostButton">
              New Post
            </button>
          )}
          <SearchBar />
          {!user ? <SignIn /> : <SignOut />}
        </header>
      )}
      {!user ? <SignIn /> : <Nav posts={posts} setPost={setPost} />}

      {!user ? "" : writing ? <NewPostView /> : <SinglePostView />}
    </div>
  )
}

export default App
