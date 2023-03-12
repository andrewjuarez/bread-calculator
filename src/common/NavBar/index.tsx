import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
  </nav>
);

export default NavBar;
