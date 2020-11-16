import React from 'react';
import './App.css';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';
import Footer from '../Footer/Footer';
import Maintenance from '../Maintenance/Maintenance'

function App() {
  return (
    <div className="App">
      {/* <section>  <Header/></section>
      <section> <MainContainer/></section>
      <section> <Footer/></section> */}
      <Maintenance/>
    </div>
  );
}

export default App;
