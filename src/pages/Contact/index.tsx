import React from 'react'
import './style.scss';

function Contact() {
  return (
    <div className="contact animate__animated  animate__fadeInLeft">
      <h1>Contact</h1>
      <div className="containerContact">
        <div className="info">
          <p>Você pode me encontrar nas redes<br></br> sociais ou pelo do meu e-mail :) </p>
          <div className="containerSocial">
            <a href="https://api.whatsapp.com/send?phone=15997088134&text=Ol%C3%A1,%20Paulo.%20Estou%20entrando%20em%20contato%20contigo%20atrav%C3%A9s%20do%20seu%20site." href="https://github.com/paulhenrique" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
              <span>+15997088134</span>
            </a>
            <a href="https://github.com/paulhenrique" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
              <span>@paulhenrique</span>
            </a>
            <a href="https://www.linkedin.com/in/paulhenriquev/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
              <span>paulhenriquev</span>
            </a>
            <a href="mailto:phvcandido@gmail.com">
              <i className="far fa-envelope"></i>
              <span>phvcandido@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
