
import "../CSSFolder/newPost.css";
/**
 * view rendered when user wants to create a new post
 * @param {} param0 
 * @returns 
 */
export function NewPostView({addPost, cancel}) {
    return (
        <form id="newPostForm">
            <input id="pictureInput" type="file" accept=".png, .jpg, .jpeg"/>
            <input id="itemName" placeholder="item name" type="text"/>
            <input id="description" placeholder="description" type="text"/>
            <input id="price" placeholder="price" type="text"/>
            <button id="postButton">Post</button>
            <button id="cancelButton">Cancel</button>
        </form>
    );
}