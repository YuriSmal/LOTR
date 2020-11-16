import React from 'react';
import BooksContainer from '../../containers/BooksContainer';
import './MainContainer.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MainContainer() {
  return (
    <Router>
    <div className="main-container">
      <section className="main-container-wrapper">

        <div className="main-card">
          <Link to='/books'>BOOKS</Link>
          <Switch>
            <Route path='/books' component={BooksContainer}/>
          </Switch>
        </div>
        
        <div className="main-card">
          <Link to='/movies'>MOVIES</Link>
          <Switch>
            <Route path='/movies' component={BooksContainer}/>
          </Switch>
        </div>
       
        <div className="main-card">
          <Link to='/characters'>CHARACTERS</Link>
          <Switch>
            <Route path='/characters' component={BooksContainer}/>
          </Switch>
        </div>
        
        <div className="main-card">
          <Link to='/quotes'>QUOTES</Link>
          <Switch>
            <Route path='/quotes' component={BooksContainer}/>
          </Switch>
        </div>
       
      </section>
    </div>
    </Router>
  );
}

export default MainContainer;
