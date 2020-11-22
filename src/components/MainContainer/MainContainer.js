import React from 'react';
import BooksContainer from '../../containers/BooksContainer';
import FilmsContainer from '../../containers/FilmsContainer';
import HeroesContainer from '../../containers/HeroesContainer';
import './MainContainer.css';
import { Route, Switch} from "react-router-dom";



function MainContainer() {
  return (
    <div className="Main-Container">
      <div className="Main-Container_wraper">
        {/* <h1 className="Main-Container_title">Welcome to Lords of the React </h1> */}
        <Switch>
          <Route path="/books" component={BooksContainer} />
          <Route path="/movies" component={FilmsContainer} />
          <Route exact path="/characters" component={HeroesContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default MainContainer;
