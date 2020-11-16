import React from 'react';
import BooksContainer from '../../containers/BooksContainer';
import FilmsContainer from '../../containers/FilmsContainer';
import HeroesContainer from '../../containers/HeroesContainer';
import './MainContainer.css'


function MainContainer() {
  return (
    <div className="Main-Container">
      <div className="Main-Container_wraper">
        <h1 className="Main-Container_title">Welcome to Lords of the React </h1>
        <p className="Main-Container_text">Select the category you are interested in or use the search</p>
        <section className="Main-Container_section">
           <BooksContainer/>
           <FilmsContainer/>
           <HeroesContainer/>
        </section>
      </div>
    </div>
  );
}

export default MainContainer;
