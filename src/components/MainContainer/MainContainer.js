import React from 'react';
import BooksContainer from '../../containers/BooksContainer';
import FilmsContainer from '../../containers/FilmsContainer';
import HeroesContainer from '../../containers/HeroesContainer';
import './MainContainer.css';
import { Route, Switch } from "react-router-dom";
import AboutUs from '../About/About';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

function MainContainer(props) {
  return (
    <div className="Main-Container">
      <div className="Main-Container_wraper">
        <Switch>
          <Route path="/books" component={BooksContainer} />
          <Route path="/movies" component={FilmsContainer} />
          <Route path="/characters" component={HeroesContainer} />
          <Route exact path="/about" component={AboutUs} />
          <div   className="Main-Container_section">
            <h1 className="Main-Container_title">Welcome to the <span>Lords of React</span> (no) website</h1>
            <p className="Main-Container_text">Welcome to our React project. Use the menu to navigate to the needed section</p>
            <Link className="about_us_link" to="/about">
              <FontAwesomeIcon className="about-fa-icon" icon={faAddressCard}/>About us</Link>
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default MainContainer;
