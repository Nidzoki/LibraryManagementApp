import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; 

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/admin');
    };

  return( 
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;