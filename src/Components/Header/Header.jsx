import React from 'react';
import { Link } from 'react-router-dom';
import c from './Header.module.css'

const Header = () => (
  <header className={c.Header}>
    <Link to='/'>Counter</Link>
    <Link to='/time'>Time</Link>
  </header>
)

export default Header;