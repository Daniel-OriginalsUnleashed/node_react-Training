import React from 'react';
import logo from './logo.svg';
import './customBootstrap.scss';

import ExampleToast from './components/ExampleToast';
import Home from './components/Home';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

function FormApp() {

    return (
      <Router>
        <div className="FormApp">
          <header className="FormApp-header">
              <p className="FormApp-intro">SPA App</p>
          </header>
          <a class="navbar-brand" href="#">Navbar</a>
          <nav className="nav navbar navbar-light bg-light" style={{ margin: 10 }}>
            <NavLink className="nav-link" activeClassName='active' to='/Toast?q=react' style={{ padding: 10 }}>
                Home
            </NavLink>
            <NavLink className="nav-link" activeClassName='active' to='/Home' style={{ padding: 10 }}>
                About
            </NavLink>
          </nav>
          <Route path='/Toast' component={ExampleToast} />
          <Route path='/Home' component={Home}/>
      
      
          
      </div>
      </Router>
    );
}
export default FormApp;
