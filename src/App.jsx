import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import Music from './components/Music/Music';
import Journey from './components/Journey/Journey';
import Tour from './components/Tour/Tour';
import Footer from './components/Footer/Footer';

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
