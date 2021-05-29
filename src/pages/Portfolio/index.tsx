import React from 'react'
import './style.scss';
function Card() {
  return (
    <div className="card">
      <img src="/img/logo_project.svg" alt="" />
      <h3>ElectrosFI</h3>
      <p>Sistema Web Completo, desenvolvido com Python, NodeJS, VueJS e MongoDB</p>
    </div>
  );
}
function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="containerCardsPortfolio">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => (
            Card()
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio
