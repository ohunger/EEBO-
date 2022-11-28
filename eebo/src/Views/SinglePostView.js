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
      <img
        src="https://firebasestorage.googleapis.com/v0/b/eebo-c2acf.appspot.com/o/images%2F0ed1b7f0-ab8c-4159-b3ef-b5b086fc0566.jpeg?alt=media&token=a1c77e57-f320-4a17-a01c-a3f797810d7d"
        id="postImage"
      />
      <div id="titleAndPrice">
        <h2 id="postTitle">{title}</h2>
        <h2 id="postPrice">${price}</h2>
      </div>
    </section>
  )
}
