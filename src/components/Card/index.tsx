import React from 'react'
import { useGlobal } from '../../contexts/global';
import './style.scss';
export interface Project {
  title: string;
  description: string;
  link: string;
  cover: string;
  github: string;
}


const Card: React.FC<Project> = ({ title, description, link, cover, github }) => {
  return (
    <>
      {/* <a onClick={(e) => { handleClick(e, link) }} href={link} target="_blank" rel="noreferrer"> */}
      <div className="card">
        <div className="containerImage">
          <img className="tooltipImage" src={cover} alt={title} />
        </div>
        {/* <img src="/img/logo_project.svg" alt="" /> */}
        <h3>{title}</h3>
        <p className="title"><strong>Description:</strong></p>
        <p>{description}</p>
        <div className="containerButtons">
          {
            link !== 'naoDisponivel' && (
              <a href={link} className="link" target="_blank" rel="noreferrer">
                <i className="fas fa-link"></i>
            Website
              </a>
            )
          }

          {
            github !== '' && (
              <a href={link} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
            Github
              </a>)

          }

        </div>
      </div>
      {/* </a> */}

    </>
  );
}
export default Card
