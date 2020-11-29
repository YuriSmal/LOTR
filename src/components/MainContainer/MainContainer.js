import React from 'react';
import BooksContainer from '../../containers/BooksContainer';
import FilmsContainer from '../../containers/FilmsContainer';
import HeroesContainer from '../../containers/HeroesContainer';
import './MainContainer.css';
import { Route, Switch,  useRouteMatch, useParams} from "react-router-dom";
import ParticularHero from "../../components/Heroes/ParticularHero";

function MainContainer(props) {
  return (
    <div className="Main-Container">
      <div className="Main-Container_wraper">
        {/* <h1 className="Main-Container_title">Welcome to Lords of the React </h1> */}
        <Switch>
          <Route path="/books" component={BooksContainer} />
          <Route path="/movies" component={FilmsContainer} />
          <Route path="/characters" component={HeroesContainer} />
          <div   className="Main-Container_section">
            <h1 className="Main-Container_title">Welcome to Lords of React</h1>
            <p className="Main-Container_text">Welcome to our project.Use the menu to view the required information</p>
          </div>
          {/* <Route path={`/characters/${this.state.heroes.docs._id}`} component={ParticularHero} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default MainContainer;
