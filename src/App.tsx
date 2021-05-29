import React from 'react'
import './assets/style/global.scss';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Dock from 'react-dock';
import { useGlobal } from './contexts/global';

function App() {
  const { showDock, setShowDock, project } = useGlobal();

  return (

    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Bio} path="/" exact />
          <Route component={Portfolio} path="/portfolio" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
      <span>
        <Dock position='left' isVisible={showDock}>
          <div className="dock">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} rel="noreferrer" target="_blank" >Acessar  <i className="fas fa-external-link-alt"></i> </a>
            <button type="button" onClick={() => setShowDock(!showDock)}>Fechar  <i className="fas fa-times-circle left"></i></button>
          </div>
        </Dock>
      </span>

    </div>
  )
}

export default App
