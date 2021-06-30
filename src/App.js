import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <LoginButton />
          <LogoutButton />
        </header>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
