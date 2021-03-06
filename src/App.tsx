import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/Buyflow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/buy/insurance_des">
            <Buyflow productId={ProductIds.desIns} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Insurance</p>
            <Link to="/buy/insurance_dev">Get Developers Insurance!</Link>
            <br></br>
            <Link to="/buy/insurance_des">Get Designers Insurance!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
