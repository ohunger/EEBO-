import "../CSSFolder/singlePost.css"
import { auth } from "../firebase/firebaseConfig"
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
}) {
  return (
    <section id="signlePostContainer">
      <img src={postImage} id="postImage" />
      <div id="titleAndPrice">
        <h2 id="postTitle">{title}</h2>
        <h2 id="postPrice">${price}</h2>
      </div>
    </section>
  )
}
