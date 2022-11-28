import { useState, useEffect } from "react"
import { fetchAllPosts } from "../firebaseServices/queryService"
import { SinglePostView } from "./SinglePostView"

export function HomeView({}) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchAllPosts().then(setPosts)
  }, [])

  return (
    <div id="homeViewContainer">
      {posts.length === 0 ? (
        <h2>No Posts Yet</h2>
      ) : (
        posts.map((post) => <SinglePostView key={post.id} {...post} />)
      )}
    </div>
  )
}
