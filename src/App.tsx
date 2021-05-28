import React from 'react'
import './assets/style/global.scss';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bio from './pages/Bio';
function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Bio} path="/" exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
