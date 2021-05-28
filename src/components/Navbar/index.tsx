import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink activeClassName={styles.activeClass} exact to="/">Bio</NavLink>
      <NavLink activeClassName={styles.activeClass} to="/portfolio" >Portfólio</NavLink>
      <NavLink activeClassName={styles.activeClass} to="/experiencia" >Experiência</NavLink>
      <NavLink activeClassName={styles.activeClass} to="/contato" >Contato</NavLink>
    </div>
  )
}

export default Navbar
