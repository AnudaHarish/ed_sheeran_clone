import './AlbumModal.css';
import {AnimatePresence, motion} from 'framer-motion';

function AlbumModal({album, onClose}) {
  return (
    <AnimatePresence>
      {album && (
        <motion.div
          className='album-modal'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onClick={onClose}
        >
          <motion.div
            className='album-modal-content'
            initial={{opacity: 0, scale: 0.8, y: 50}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.8, y: 50}}
            transition={{duration: 0.5}}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className='album-close'
              onClick={onClose}
            >
              &times;
            </button>
            <div className="album-modal-image">
              <img src={album.image} alt={album.title} />
            </div>
            <div className="album-modal-info">
              <span className="modal-year">
                {album.year}
              </span>
              <h2>{album.title}</h2>
              <p>{album.description}</p>
              <div className="track-list">
                <h3>TRACKLIST</h3>
                {album.tracks.map((track, index) => (
                  <div
                    className='track'
                    key={index}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{track}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AlbumModal;