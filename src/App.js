import React from 'react';
import { useState } from 'react';

import './App.css';

import bellingham from './data/bellingham.json';
import innsbruck from './data/innsbruck.json';
//import example from './date/example.json';
//☆파일 이름 맞춰서 계속 import.

function App() {
  /* Variables */
  // State
  const [placeState, setPlaceState] = useState('index');
  function handlePlaceState(name) {
    return function() {
      setPlaceState(name);
    };
  }

  // ☆List
  const place = [
    {key: 'bellingham', value: bellingham},
    {key: 'innsbruck', value: innsbruck}
    //{key: 'example', value: example}
  ]

  /* Function */
  function Nav() {
    return (
      <nav>
        {place.map(element => (
          <button onClick={handlePlaceState(element.value)}>{element.key}</button>
        ))}
      </nav>
    );
  }

  return (
    <>
      <Nav />
      {placeState !== 'index' && 
        (<div className="grid-container"> 
          {Object.entries(placeState).map(([key, path]) => (
          <img key={key}  alt={key} className="grid-item" src={require(`${path}`)} />
        ))}</div>)}
    </>
  )
}

export default App;
