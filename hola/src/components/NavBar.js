import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles.css";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import logo from './logo.png'; // Replace with the path to your logo image
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // Import the RouterLink component

function Navbar() {
  const { t, i18n } = useTranslation();

  function handleClick() {
    const lang = i18n.language === 'en' ? 'fr' : 'en';
    i18next.changeLanguage(lang);
  }

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <nav>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img
            src={logo}
            alt="Logo"
            id="logo"
            className="logo"
            style={{ width: '200px', padding: '10px', marginRight: '10px', marginLeft: '50px' }}
          />
        </a>
        <Link
          to="AboutUs"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t('About Us')}
        </Link>
        <RouterLink
          to="/donate"
          className="nav-link"
        >
          {t('Donations')}
        </RouterLink>
        <RouterLink
          to="/Bachelors"
          className="nav-link"
        >
          {t('Bachelors')}
        </RouterLink>
        
        <Link
          to="faq"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t('FAQ')}
        </Link>
        <RouterLink
          to="/faq"
          className="nav-link"
        >
          {t('FAQ')}
        </RouterLink>

        <Link
          to="ContactUs"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t('Contact Us')}
        </Link>

        <button onClick={handleClick} id="translate" className="translate-button">
          {i18n.language === 'en' ? 'FR' : 'EN'}
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;