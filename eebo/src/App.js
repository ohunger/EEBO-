import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';
import Nav from './Views/Nav.js';
import { SignIn , SignOut, useAuthentication} from './firebase/authenticationService';
import { HomeView } from './Views/HomeView';

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState(null)
  const [writing, setWriting] = useState(false)
  
  const user = useAuthentication();


  return (
    <div className="App" id="App">
      {user &&
            <header>
            {user && <button onClick={() => setWriting(true)}>New Post</button>}
            {!user ? <SignIn /> : <SignOut/>}
          </header>
      }
      {!user ? <SignIn /> :<Nav posts={posts} setPost={setPost} />}
    </div>
  );
}

export default App;
