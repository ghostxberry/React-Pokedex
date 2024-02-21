import { useState } from 'react'
import './App.css';
import pokemon from './pokemon'
import Pokedex from './pokedex'


function App() {
 return (
    <div className = "app-container">
    <Pokedex pokemon ={pokemon}/>
    </div>
  );
}

export default App
