import React from 'react';
import BooksContainer from '../../containers/BooksContainer';
import './MainContainer.css'


function MainContainer() {
  return (
    <div className="Main-Container">
      <section> <BooksContainer/></section>
    </div>
  );
}

export default MainContainer;
