import { useState, useEffect } from "react"
import { fetchAllPosts } from "../firebaseServices/queryService"

export function HomeView({}) {
  useEffect(() => {
    fetchAllPosts()
  }, [])

  return (
    <div>
      <h2>Home View!</h2>
    </div>
  )
}
