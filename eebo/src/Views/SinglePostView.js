import { Post } from "../Classes/post"
import "../CSSFolder/singlePost.css"
/**
 * rendered to show a single post item
 * @param {} param0
 * @returns
 */
export function SinglePostView({
  id,
  datePosted,
  description,
  postImage,
  price,
  title,
  userId,
  userName,
  latitude,
  longitude,
  goToPage,
  changePostForDetails,
}) {
  function setPageDetails() {
    changePostForDetails(
      new Post(
        id,
        datePosted,
        description,
        postImage,
        price,
        title,
        userId,
        userName,
        latitude,
        longitude
      )
    )
    goToPage("details")
  }
  return (
    <section id="signlePostContainer" onClick={setPageDetails}>
      <img src={postImage} id="postImage" alt="single post" />
      <div id="titleAndPrice">
        <h2 id="postTitle">{title}</h2>
        <h2 id="postPrice">${price}</h2>
      </div>
    </section>
  )
}
