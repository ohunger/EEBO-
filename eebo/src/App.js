import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';
import Nav from './Nav.js';
import { SignIn , SignOut, useAuthentication} from './firebase/authenticationService';
import { HomeView } from './Views/HomeView';

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState(null)
  const [writing, setWriting] = useState(false)
  
  const user = useAuthentication();


  return (
    <div className="App">
      <header>
        {user && <button onClick={() => setWriting(true)}>New Post</button>}
        {!user ? <SignIn /> : <SignOut/>}
      </header>
      {!user ? "" : <Nav posts={posts} setPost={setPost} />}
      {!user ? <SignIn /> : <HomeView />}
    </div>
  );
}

export default App;
