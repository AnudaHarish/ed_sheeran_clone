import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Music from './components/Music';
import Journey from './components/Journey';
import Tour from './components/Tour';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Music />
        <Journey />
        <Tour />
      </main>
      <Footer />
    </div>
  );
}

export default App
