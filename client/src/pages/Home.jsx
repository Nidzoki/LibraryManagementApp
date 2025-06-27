import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Dobrodošli u Library Manager</h1>
      <div className="home-buttons">
        <Link to="/login">
          <button className="home-button">Prijava</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;