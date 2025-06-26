import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Library Manager</h1>
      
      <Link to="/login">
        <button className="home-button">Login</button>
      </Link>

    </div>
  );
}

export default Home;