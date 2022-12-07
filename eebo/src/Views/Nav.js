import "../CSSFolder/nav.css"

export default function Nav({ posts, setPosts }) {
  return (
    <nav>
      {!posts
        ? ""
        : posts.map((a) => (
            <p key={a.id} onClick={() => setPosts(a)}>
              Marketplace
              {a.title}
              Categories
              {a.categories}
            </p>
          ))}
    </nav>
  )
}
