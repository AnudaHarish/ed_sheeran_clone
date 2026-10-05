import {motion, spring} from 'framer-motion';
import './Journey.css';
import journey from '../../data/journey';

function Journey() {
  return (
    <section id="journey" className='journey'>
      <div className="journey-header">
        <motion.p
          className='journey-label'
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          THE ROAD SO FAR
        </motion.p>
        <motion.h2
          initial={{opacity: 0, y: 80}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
        >
          JOURNEY
        </motion.h2>
      </div>
      <div className="journey-timeline">
        {journey.map((item,index) => (
          <motion.article
            className='journey-item'
            key={item.id}

            initial={{
              opacity: 0,
              rotate: -90
            }}

            whileInView={{
              opacity: 1,
              rotate: 0
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.15,
              type: spring
            }}
          >
            <span className='journey-year'>
              {item.year}
            </span>
            <div className="journey-symbol">
              {item.symbol}
            </div>
            <div className="journey-dot"></div>
            <div className="journey-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Journey;