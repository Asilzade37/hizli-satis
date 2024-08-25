import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Hızlı Satış
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links">
              Üye Ol
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Giriş Yap
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;