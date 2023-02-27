import NavBar from './NavBar.js';
import Hero from './Hero.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className='ads'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
