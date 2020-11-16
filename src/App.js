import React from 'react';
import Search from "./components/search/search";
import Title from "./components/title/title";
import List from "./components/list/list";
import './App.css';

function App(props) {
  return (
        <div>
            <Search world={props.world} name="Yulian" />
            <Title world={props.world} title="TESTED" />
            <List />
        </div>
  );
}

export default App;
