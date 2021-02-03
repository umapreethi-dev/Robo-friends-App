import React from "react";
import CardList from './Components/cardList';
import {robots} from './Components/robots';
import SearchBox from './searchBox';
import './css/body.css';

const App = () => {
  return (
    <div className="body">
      <h1>Robo Friends</h1>
      <SearchBox/>
      <div className="cards">
        <CardList robots={robots} />
      </div>
    </div>
  );
};

export default App;
