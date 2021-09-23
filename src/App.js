import './App.scss';
import './components/animations.scss'
import Bestsellers from './components/Bestsellers';
import Collections from './components/Collections';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Collections />
      <Bestsellers />
    </div>
  );
}

export default App;
