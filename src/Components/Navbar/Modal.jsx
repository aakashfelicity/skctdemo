import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal }) => {
  const [activeTab, setActiveTab] = useState('register');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  if (!showModal) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8008/api/users/register', { // Replace with your backend port
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });
    const result = await response.text();
    alert(result);
    if (response.ok) {
      setActiveTab('signin');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8008/api/users/login', { // Replace with your backend port
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: loginUsername, password: loginPassword }),
    });
    const result = await response.text();
    alert(result);
    if (response.ok) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <div className="modal-header">
          <img src="/path/to/logo.png" alt="Logo" className="modal-logo" />
          <div className="modal-tabs">
            <button
              className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
            <button
              className={`tab-button ${activeTab === 'signin' ? 'active' : ''}`}
              onClick={() => setActiveTab('signin')}
            >
              Sign In
            </button>
          </div>
        </div>
        {activeTab === 'register' && (
          <div className="modal-body">
            <h2>Register</h2>
            <p>Get started with a free account to rate, review, and discover top games, movies, TV shows, and more!</p>
            <form onSubmit={handleRegister}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Register</button>
            </form>
          </div>
        )}
        {activeTab === 'signin' && (
          <div className="modal-body">
            <h2>Sign In</h2>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} required />
              <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
              <button type="submit">Sign In</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
