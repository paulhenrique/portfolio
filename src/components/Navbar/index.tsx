import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Bio</Link>
      <Link to="/portfolio" >Portfólio</Link>
      <Link to="/experiencia" >Experiência</Link>
      <Link to="/contato" >Contato</Link>
    </div>
  )
}

export default Navbar
