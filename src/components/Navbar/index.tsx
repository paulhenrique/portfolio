import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink activeClassName={styles.activeClass} exact to="/">Bio</NavLink>
      <NavLink activeClassName={styles.activeClass} to="/portfolio" >Portfolio</NavLink>
      <NavLink activeClassName={styles.activeClass} to="/experiencia" >Experience</NavLink>
      <NavLink activeClassName={styles.activeClass} to="/contato" >Contact</NavLink>
    </div>
  )
}

export default Navbar
