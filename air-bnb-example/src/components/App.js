import NavBar from './NavBar.js';
import Hero from './Hero.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className='ads'>
        <Card
          img="horseRiding.jpg"
          rating="4.8"
          reviewCount={14}
          country="Usa"
          title="Horse riding with Brooke Monk"
          price={230} 
          />
          <Card
          img="nickiMinaj.jpg"
          rating="3.5"
          reviewCount={14}
          country="Usa"
          title="Dancing Lessons with Nicki Minaj"
          price={450} 
          />
          <Card
          img="michaelPhelps.jpg"
          rating="5.0"
          reviewCount={6}
          country="Usa"
          title="Life Lessons with Michael Phelps"
          price={336} 
          />
          <Card
          img="krisko.jpg"
          rating="5.0"
          reviewCount={8}
          country="Bulgaria"
          title="Singing lessons with Krisko Biic"
          price={410} 
          />
          <Card
          img="cookingPhoto.jpg"
          rating="4.0"
          reviewCount={10}
          country="Australia"
          title="Cooking lessons with Margareth"
          price={120} 
          />
          <Card
          img="hacker.jpg"
          rating="3.5"
          reviewCount={6}
          country="Russia"
          title="Hacking lessons with Boris"
          price={230} 
          />
      </div>
    </div>
  );
}

export default App;
