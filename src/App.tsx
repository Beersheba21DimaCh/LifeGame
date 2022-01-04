import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LifeGame from './components/life-game';

const App: React.FC = () => {
  return <div>
    <div style={{backgroundColor: "gray", textAlign: "center", width: "200px", margin: "auto" }}>Hello React!!!</div>
    <LifeGame></LifeGame>
  </div>
}
export default App;
