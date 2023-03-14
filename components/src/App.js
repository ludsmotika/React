import Main from './components/Main';
import NavBar from './components/NavBar';
import React from 'react';

function App() {

  let [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className='container'>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
