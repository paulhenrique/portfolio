import React from 'react'
import './assets/style/global.scss';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { useGlobal } from './contexts/global';

function App() {
  const { showDock, setShowDock, project } = useGlobal();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (project.link === 'naoDisponivel') e.preventDefault();
  }

  return (

    <>
      <div className="container" style={{ filter: `blur(${showDock ? '5px' : '0'})` }}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={Bio} path="/" exact />
            <Route component={Portfolio} path="/portfolio" />
            <Route component={Contact} path="/contact" />
          </Switch>
        </BrowserRouter>
      </div>
      <span>
        {showDock &&
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
              <button type="button" onClick={() => setShowDock(!showDock)}>Fechar  <i className="fas fa-times-circle left"></i></button>
            </div>
          </div>)
        }
      </span>
    </>
  )
}

export default App
