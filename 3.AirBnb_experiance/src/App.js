import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import { instructors } from './data';

function App() {
  const cardElements = instructors.map(instructor => {
    return <Card
      instructor={instructor}
      // or ...
      // {...instructor}
    />
  });

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className='instructors-container'>
        {cardElements}
      </section>
    </div>
  );
}

export default App;
