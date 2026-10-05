import {motion} from 'framer-motion';
import './Intro.css';
import aboutImg from '../../assets/images/about.jpg';

function Intro() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <motion.p 
          className='about-label'
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          ABOUT &#x2f; THE STORY
        </motion.p>
        <motion.h2 
          initial={{opacity: 0, y: 80}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
        >
          A STORY
          <br />
          IN EVERY
          <br />
          SONG &#46;
        </motion.h2>
      </div>
      <div className="about-content">
        <div
          className='about-image-wrapper'
          initial={{opacity: 0, x: -80}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
        >
          <img src={aboutImg} alt="Ed Sheeran performing" className='about-image'/>
        </div>
        <motion.div
          className='about-text'
          initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8, delay: 0.2}}
        >
          <p className='about-description'>
            Ed Sheeran is a singer, songwriter and performer
            known for combining intimate acoustic songwriting
            with contemporary pop.
          </p>
          <p className="about-secondary">
            From small stages to some of the world's biggest
            venues, his music has connected with audiences
            through honest stories, memorable melodies and
            personal experiences.
          </p>
          <a href="#journey" className='about-button'>
            Read More
            <span>&#8594;</span>
          </a>
        </motion.div>
      </div>
      <div className="about-meta">
        <div>
          <span>01</span>
          <p>SONGWRITER</p>
        </div>
        <div>
          <span>02</span>
          <p>PERFORMER</p>
        </div>
        <div>
          <span>03</span>
          <p>STORYTELLER</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;