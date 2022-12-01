import logo from "./logo.svg"
import { useEffect, useState } from "react"
import "./App.css"
import Nav from "./Views/Nav.js"
import { SignIn, SignOut, useAuthentication } from "./firebase/authenticationService"
import { HomeView } from "./Views/HomeView"
import { SearchBar } from "./Views/SearchBar"
import { NewPostView } from "./Views/NewPostView"
import { SinglePostView } from "./Views/SinglePostView"
import { DetailsView } from "./Views/DetailsView"

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState(null)
  const [page, setPage] = useState("home")
  const [writing, setWriting] = useState(false)
  const [postForDetails, setPostForDetails] = useState(null)

  const user = useAuthentication()

  function setWritingFalse() {
    setWriting(false)
  }

  function goToPage(goTo) {
    setPage(goTo)
  }

  function changePostForDetails(post) {
    setPostForDetails(post)
  }

  if (page === "home") {
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

        {!user ? (
          ""
        ) : writing ? (
          <NewPostView setWritingFalse={setWritingFalse} />
        ) : (
          <HomeView goToPage={goToPage} changePostForDetails={changePostForDetails} />
        )}
      </div>
    )
  } else if (page === "details") {
    return (
      <div className="App" id="App">
        <DetailsView goToPage={goToPage} postForDetails={postForDetails} />
      </div>
    )
  }
}

export default App
