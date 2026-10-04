import edVideo from '../../assets/videos/ednew2.mp4';
import './Hero.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="hero">
      <video
      className='hero-video'
      src={edVideo}
      autoPlay
      muted
      loop  
      playInline
      >
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.p className="hero-small" initial={{opacity: 0, x: -100}} animate={{opacity: 1, x:0}} transition={{duration: 0.8, ease: "easeInOut", delay: 0.2}}>
          SINGER &#xb7; SONGWRITER &#xb7; PERFORMER
        </motion.p>
        <motion.p className='hero-description' initial={{opacity: 0, x: -200}} animate={{opacity:1, x:0}} transition={{duration: 0.8, ease: 'easeInOut', delay: 0.7}}>
          Music, stories and moments
          <br />
          that connect people 
        </motion.p>
        <motion.a initial={{opacity:0, x: 100}} animate={{opacity:1, y: 0}} transition={{duration:0.8, ease:'easeOut', delay: 0.8}} href="#music" className='hero-button'>
          Explore <span>&#8594;</span>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;