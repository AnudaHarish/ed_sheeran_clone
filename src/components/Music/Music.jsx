import './Music.css';
import albums from '../../data/albums';
import {motion} from 'framer-motion';

function Music() {
  return (
    <section id="music" className="music">
      <div className="music-header">
        <div>
          <p className='section-label'>DISCOGRAPHY</p>
          <h2>Music</h2>
        </div>
        <p className='music-intro'>Explore the albums and songs that have shaped Ed Sheeran's musical journey&#46;</p>
      </div>
      <div className="album-grid">
        {albums.map((album,index) => (
          <motion.article
            className='album-card'
            key={album.id}

            initial={{opacity: 0 , y: 80}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{duration:0.7, delay: index * 0.15}}
          >
            <div className="album-image-wrapper">
              <img src={album.image} alt={album.title} className='album-image'/>
              <div className="album-overlay">
                <span>View Album &#8594;</span>
              </div>
            </div>
            <div className="album-info">
              <span className='album-year'>
                {album.year}
              </span>
              <h3>{album.title}</h3>
              <p>{album.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Music;