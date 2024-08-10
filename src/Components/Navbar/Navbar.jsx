import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Modal from './Modal';  // Ensure the path is correct

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-text">flic</Link>
      </div>
      <div className="navbar-links">
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/news">News</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/screenplay">Screenplay</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button type="button" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <button type="button" className="register-button" onClick={openModal}>Register</button>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Navbar;
