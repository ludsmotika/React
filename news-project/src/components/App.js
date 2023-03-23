import React from 'react';
import Header from './Header.js';
import Main from './Main.js';

function App() {

  let [darkMode, setDarkMode] = React.useState(false);

  function toogleDarkSide() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toogleDarkSide={toogleDarkSide} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
