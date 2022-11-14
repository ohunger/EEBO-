import logo from './logo.svg';
import './App.css';
import { SignIn , useAuthentication} from './firebase/authenticationService';
import { HomeView } from './Views/HomeView';

function App() {

  const user = useAuthentication();

  return (
    <div className="App">
      {!user ? <SignIn /> : <HomeView />}
    </div>
  );
}

export default App;
