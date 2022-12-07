import "../CSSFolder/homeView.css"
import { useState, useEffect } from "react"
import { fetchAllPosts } from "../firebaseServices/queryService"
import { SinglePostView } from "./SinglePostView"

export function HomeView({ goToPage, changePostForDetails, posts, setPosts }) {
  useEffect(() => {
    fetchAllPosts().then(setPosts)
  }, [])

  return (
    <div id="homeViewContainer" className="grid">
      {posts.length === 0 ? (
        <h2>No Posts Yet</h2>
      ) : (
        posts.map((post) => (
          <SinglePostView
            key={post.id}
            {...post}
            className="col"
            goToPage={goToPage}
            changePostForDetails={changePostForDetails}
          />
        ))
      )}
    </div>
  )
}
