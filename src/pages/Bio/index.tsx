import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';

function Bio() {
  return (
    <div className="bio">
      <div className="cardHome animate__animated  animate__fadeInLeft">
        <div className="cardContainer">
          <img src="/img/logo.png" alt="Logo PH" />
          <div>
            <h1>Paulo <br></br>Henrique</h1>
            <p>Apaixonado por desenvolver e construir sistemas, com o título de técnico em informática pelo IFSP Campus Itapetininga participei de diferentes projetos com os quais aprendi muito, recebi reconhecimento através de menções honrosas na cidade de Itapetininga, tendo trabalhado junto da prefeitura e em projetos locais na cidade, sempre desenvolvendo identidades visuais e aprimorando interfaces. Trabalhei no desenvolvimento de diferentes sistemas, tendo hoje a certificação Harvard CS50, desenvolvi recursos em Python e Javascript. </p>
          </div>
          <Link className="portfolio" to="/portfolio">Ver Portfolio    <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bio
