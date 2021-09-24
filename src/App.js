import './App.scss';
import './components/animations.scss'
import Bestsellers from './components/Bestsellers';
import Blogs from './components/Blogs';
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
      <Blogs/>
    </div>
  );
}

export default App;
