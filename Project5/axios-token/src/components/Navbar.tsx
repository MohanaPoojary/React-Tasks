import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default NavBar;
