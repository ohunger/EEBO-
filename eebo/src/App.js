import "./App.css"
import { useState } from "react"
import { SignIn, SignOut, useAuthentication } from "./firebase/authenticationService"
import { HomeView } from "./Views/HomeView"
import { SearchBar } from "./Views/SearchBar"
import { NewPostView } from "./Views/NewPostView"
import { DetailsView } from "./Views/DetailsView"

function App() {
  const [posts, setPosts] = useState([])
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
  }
}

export default App
