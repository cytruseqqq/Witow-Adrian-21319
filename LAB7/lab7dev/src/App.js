import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Counter from './Counter.js';
import InputTracker from "./InputTracker.js";
import LoginStatus from './LoginStatus.js';
import TodoList from "./TodoList";
import Formularz from "./Formularz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div><Hello/></div>
          <div><Counter/></div>
          <div><InputTracker/></div>
          <div><LoginStatus/></div>
          <div><Formularz/></div>
        </p>
        <a
            className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
