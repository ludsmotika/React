import NavBar from './NavBar.js';
import Hero from './Hero.js';
import Card from './Card.js';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className='ads'>
        {data.map(x => <Card
          key={x.id}
          item={x}
        />)}

      </div>
    </div>
  );
}

export default App;
