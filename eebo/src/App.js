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
import { MapContainer } from "./GooleMaps/goolgeMap"

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
            <SearchBar posts={posts} setPosts={setPosts} />
            {!user ? <SignIn /> : <SignOut />}
          </header>
        )}
        {!user ? <SignIn /> : ""}

        {!user ? (
          ""
        ) : writing ? (
          <NewPostView setWritingFalse={setWritingFalse} />
        ) : (
          <HomeView
            goToPage={goToPage}
            changePostForDetails={changePostForDetails}
            posts={posts}
            setPosts={setPosts}
          />
        )}
      </div>
    )
  } else if (page === "details") {
    return (
      <div className="App" id="App">
        <DetailsView goToPage={goToPage} postForDetails={postForDetails} />
      </div>
    )
  } else if (page === "map") {
    return <MapContainer />
  }
}

export default App
