import React from 'react'
import './assets/style/global.scss';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { useGlobal } from './contexts/global';
import Modal from './components/Modal';

function App() {
  const { showModal } = useGlobal();


  return (

    <>
      <div className="container" style={{ filter: `blur(${showModal ? '5px' : '0'})` }}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={Bio} path="/" exact />
            <Route component={Portfolio} path="/portfolio" />
            <Route component={Contact} path="/contact" />
          </Switch>
        </BrowserRouter>
      </div>
      <Modal />
    </>
  )
}

export default App
