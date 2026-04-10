import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const burgerRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="logo" />
          <h1 className="logo_text">EduBridge</h1>
        </Link>
      </div>
      <div className="header_rightSide">
        <nav ref={navRef} className={`nav ${menuActive ? 'active' : ''}`}>
          <ul className="nav_ul">
            <li><Link to="/" className="nav_a" onClick={() => setMenuActive(false)}>მთავარი</Link></li>
            <li><Link to="/events" className="nav_a" onClick={() => setMenuActive(false)}>აქტივობები</Link></li>
            <li><Link to="/calendar" className="nav_a" onClick={() => setMenuActive(false)}>კალენდარი</Link></li>
            <li><Link to="/tips" className="nav_a" onClick={() => setMenuActive(false)}>რჩევები</Link></li>
            <li><Link to="/contact" className="nav_a" onClick={() => setMenuActive(false)}>კონტაქტი</Link></li>
            <li className="mobile_auth"><Link to="/profile" className="header_btn" style={{ textDecoration: 'none' }} onClick={() => setMenuActive(false)}>პროფილი</Link></li>
          </ul>
        </nav>
        <Link to="/profile" className="header_btn desktop_auth" style={{ textDecoration: 'none' }}>პროფილი</Link>
        <button ref={burgerRef} className={`burger_menu ${menuActive ? 'active' : ''}`} id="burgerMenu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
