import React from 'react'
import { useGlobal } from '../../contexts/global';

function Modal() {
  const { showModal, setShowModal, project } = useGlobal();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (project.link === 'naoDisponivel') e.preventDefault();
  }

  return (
    <span>
      {showModal &&
        (<div className="dock animate__animated  animate__fadeIn">
          <div className="containerDock">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {
              project.link === 'naoDisponivel' && (<p>Este projeto não está disponível para acesso por ser privado ou estar em rede fechada.</p>)
            }
            <a href={project.link} onClick={(e) => handleClick(e)} className={`${project.link === 'naoDisponivel' ? 'disabled' : ''}`} rel="noreferrer" target="_blank" >
              Acessar  <i className="fas fa-external-link-alt"></i>
            </a>
            <button type="button" onClick={() => setShowModal(!showModal)}>Fechar  <i className="fas fa-times-circle left"></i></button>
          </div>
        </div>)
      }
    </span>
  )
}

export default Modal
