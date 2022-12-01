import "../CSSFolder/details.css"

/**
 * View shows details about a post
 */

export function DetailsView({ goToPage, postForDetails }) {
  function setPageToHome() {
    goToPage("home")
  }

  return (
    <div class="container">
      <div class="toppane">
        <h2>{postForDetails.title}</h2>
        <button onClick={setPageToHome}>Back</button>
      </div>
      <div class="leftpane">
        <img src={postForDetails.postImage} id="postImage" />
        <button>Buy ${postForDetails.price}</button>
      </div>
      <div class="middlepane">{postForDetails.description}</div>
      <div class="rightpane">
        <h1>Will show uber and google maps</h1>
      </div>
    </div>
  )
}
