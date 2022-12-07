import "../CSSFolder/searchBar.css"
import { useState, useEffect } from "react"
import { fetchAllPosts } from "../firebaseServices/queryService"
import { searchPosts } from "../firebaseServices/queryService"
import ManageSearchIcon from "@mui/icons-material/ManageSearch"

export function SearchBar({ posts, setPosts }) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (query === "") {
      fetchAllPosts().then(setPosts)
    } else {
      searchPosts(query).then(setPosts)
    }
  }, [query])

  function searchForUserQuery() {}

  //onClick={searchForUserQuery}

  return (
    <form id="searchForm">
      <input
        type="text"
        placeholder="search"
        name="searchBar"
        id="searchBar"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ManageSearchIcon id="searchIcon" />
    </form>
  )
}
