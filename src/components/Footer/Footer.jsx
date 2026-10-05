import './Footer.css';
import logo from '../../assets/images/logofinal.png';

function Footer() {

  function scrollToTop(){
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer>
      <button className='back-to-top' onClick={scrollToTop}>
        Back Top Top
        <span> &#8593;</span>
      </button>
      <div className='top'>
        <div className='footer-logo'>
          <img src={logo} alt="" />
        </div>
        <div className='footer-social'>
          <a href="#" onClick={(event) => event.preventDefault()}>Instagram</a>
          <a href="#" onClick={(event) => event.preventDefault()}>Facebook</a>
          <a href="#" onClick={(event) => event.preventDefault()}>YouTube</a>
          <a href="#" onClick={(event) => event.preventDefault()}>Spotify</a>
        </div>
      </div>
      <div className='bottom'>
        <p>&copy;2026 ED&#46; All rights reserved&#46;</p>
      </div>
    </footer>
  );
}

export default Footer;