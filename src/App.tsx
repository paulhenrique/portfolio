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
  const { showDock } = useGlobal();
  console.log(showDock);
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
      <Dock position='left' isVisible={showDock}>Test</Dock>
    </div>
  )
}

export default App
