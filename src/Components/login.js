import React from 'react';
import './Login.css';
import logo from '../Components/images/logo.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src={logo} alt="REG Logo" />
        </div>
        
        <h2>Log in to your account</h2>
        
        <form className="login-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Enter your name"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Enter your password"
            />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="forgot-password">Forgotten password?</a>
          </div>
          
          <button type="submit" className="login-button">
            Log In
          </button>
          
          <div className="divider">
            <span>OR</span>
          </div>
          
          <div className="signup-prompt">
            If you don't have account! <a href="#">SignUp</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
