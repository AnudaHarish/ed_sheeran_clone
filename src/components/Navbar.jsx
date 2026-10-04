import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        ED&#x2e;
      </a>
      <button 
      className="menu-btn" 
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation">
        <img src="../assets/icons/hamburger.png" alt="hambuger-icon" />
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