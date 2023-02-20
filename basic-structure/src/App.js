import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Reasons why i am learning React</p>
        <div>
          <ul className="Reasons-list">
            <li>Because it is flexible</li>
            <li>It is declarative</li>
            <li>To be able to do good looking web projects in the future</li>
            <li>It is maintained by Facebook</li>
          </ul>
        </div>

        <p>If you are interested in learning react, you can check the official documentation here!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more!
        </a>
      </header>
    </div>
  );
}

export default App;
