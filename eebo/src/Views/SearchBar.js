import "../CSSFolder/searchBar.css"
import ManageSearchIcon from "@mui/icons-material/ManageSearch"

export function SearchBar({}) {
  function searchForUserQuery(e) {
    e.preventDefault()
  }

  return (
    <form id="searchForm">
      <input type="text" placeholder="search" name="searchBar" id="searchBar" />
      <ManageSearchIcon id="searchIcon" onClick={searchForUserQuery} />
    </form>
  )
}
