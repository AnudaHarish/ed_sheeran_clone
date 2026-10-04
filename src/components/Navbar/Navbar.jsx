import { useState } from "react";
import './Navbar.css';
import hamburgerIcon from "../../assets/icons/hamburgerMenuIcon.svg";
import logo from "../../assets/images/ed_logo3.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <img src={logo} alt="" />
      </a>
      <button 
      className="menu-btn" 
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation">
        <img src={hamburgerIcon} alt="" />
      </button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#music" onClick={closeMenu}>
          Music
        </a>
        <a href="#journey" onClick={closeMenu}>
          Journey
        </a>
        <a href="#tour" onClick={closeMenu}>
          Live
        </a>
      </nav>
    </header>
  );
}

export default Nav;