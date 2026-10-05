import './Tour.css';
import {motion} from 'framer-motion';
import tourDates from '../../data/tourDates';

function Tour() {
  return (
    <section id="tour" className='tour'>
      <div className='tour-header'>
        <motion.p
          className='tour-label'
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          LIVE &#x2f; ON STAGE
        </motion.p>
        <motion.h2
          initial={{opacity: 0, y: 80}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
        >
          SEE YOU
          <br/>
          OUT THERE &#46;
        </motion.h2>
      </div>
      <div className="tour-list">
        {tourDates.map((tour,index) => (
          <motion.article
            className='tour-item'
            key={tour.id}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12
            }}
          >
            <div className="tour-date">
              <span className="tour-day">
                {tour.day}
              </span>
              <span className="tour-month">
                {tour.month}
              </span>
            </div>
            <div className="tour-location">
              <h3>
                {tour.city}
              </h3>
              <p>{tour.venue}</p>
            </div>
            <div className="tour-country">
              {tour.country}
            </div>
            <a 
              href="#"
              className='tour-button'
              onClick={(event) => event.preventDefault()}
            >
              Details
              <span>&#8594;</span>
            </a>
          </motion.article>
        ))}
      </div>
      <motion.a 
        href="#" 
        className='tour-all-btn'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{
          duration: 0.8,
          delay: 0.5
        }}
        onClick={(event) => event.preventDefault()}
      >
        View All Dates
        <span>&#8594;</span>
      </motion.a>
    </section>
  );
}

export default Tour;