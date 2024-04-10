// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import CSS file for LoginForm
import applelogo from './apple-logo.png'

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit prop with username and password
    onSubmit({ username, password });
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook Login logic
  };

  const handleAppleSignIn = () => {
    // Implement Sign In with Apple ID logic
  };

  return (
    <div className="login-container">
      {/* Removed backgroundImage style */}
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="separator">OR</div>
        <div className="line-before"></div> {/* Line before OR */}
        <div className="line-after"></div> {/* Line after OR */}
        <div className="social-login">
          <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
          <button type="button" className="facebook-btn" onClick={handleFacebookSignIn}>
            Sign in with Facebook
          </button>
          <button type="button" className="apple-btn" onClick={handleAppleSignIn}>
            Sign in with Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
