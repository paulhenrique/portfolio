import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles.scss';

function Navbar() {
  return (
    <div className="navbar">
      <NavLink activeClassName="active" exact to="/">Bio</NavLink>
      <NavLink activeClassName="active" to="/portfolio" >Portfolio</NavLink>
      <NavLink activeClassName="active" to="/contact" >Contact</NavLink>
    </div>
  )
}

export default Navbar
