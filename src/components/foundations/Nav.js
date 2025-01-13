import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;