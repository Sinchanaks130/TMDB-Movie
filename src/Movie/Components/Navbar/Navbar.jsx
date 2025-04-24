import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useDarkMode } from '../../../context/DarkModeContext'; // Import Dark Mode context
import Loader from '../../Components/Loader/Loader'; // Import the Loader component

const Navbar = ({ resetPagination }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Using Dark Mode context
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Clear search field when navigating to MoviePage, CastPage, About, or Contact
  useEffect(() => {
    const routesToClearSearch = ['/movie', '/cast', '/about', '/contact']; // Add routes where search should be cleared
    if (routesToClearSearch.some((route) => location.pathname.startsWith(route))) {
      setSearch(''); // Clear the search field
    }
  }, [location.pathname]); // Trigger effect when the path changes

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && search.trim()) {
      navigate(`/?search=${encodeURIComponent(search)}`);
      closeMenu();
    }
  };

  const handleLinkClick = (path) => {
    if (path === '/') {
      resetPagination(); // Reset pagination if navigating to the home page
      navigate('/', { replace: true });
      closeMenu();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
      closeMenu();
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Logo */}
      <Link
        className="logo animated-logo"
        to="/"
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick('/');
        }}
      >
        🎞️ ScreenTrail
      </Link>

      {/* Loader */}
      {loading && <Loader />}

      {/* Menu */}
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <input
          type="text"
          id="search"
          placeholder="Search for a movie"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmit}
          className="search-input"
        />
        <ul>
          <li>
            <Link to="/" onClick={() => handleLinkClick('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleLinkClick('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleLinkClick('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {/* User Profile Dropdown */}
      <div className="user-profile" onClick={() => setShowDropdown(!showDropdown)}>
        <span className="user-icon">👤</span>
        {showDropdown && (
          <div className="dropdown-menu">
            <li onClick={handleLogout}>Logout</li>
          </div>
        )}
      </div>

      {/* Dark/Light Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="icon-dark-mode-toggle">
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Menu Toggle (Hamburger Icon) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;