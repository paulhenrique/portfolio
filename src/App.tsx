import React from 'react'
import './assets/style/global.scss';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Bio} path="/" exact />
          <Route component={Portfolio} path="/portfolio" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
