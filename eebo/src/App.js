import logo from './logo.svg';
import './App.css';
import { SignIn } from './firebase/authenticationService';

function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default App;
