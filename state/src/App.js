import logo from './logo.svg';
import './App.css';
import {Game,Demo} from './Game.js';
import Rando from './Rando.js';


function App() {
  return (
    <div className="App">
      <Game color ="red"/>
      <Demo animal ="bobcat" food="pineaple" color="cyan"/>
      <Rando maxNum ={7} />

    </div>
  );
}

export default App;
