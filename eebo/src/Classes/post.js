export class Post {
  constructor(id, datePosted, description, postImage, price, title, userId, userName) {
    this.id = id
    this.datePosted = datePosted
    this.description = description
    this.postImage = postImage
    this.price = price
    this.title = title
    this.userId = userId
    this.userName = userName
  }

  toString() {
    return this.postId + " posted by " + this.userName
  }
}
