import React from 'react';
import './App.css';
import ImageData from './image.json';

function App() {
  return (
    <div className="grid-container"> 
      {Object.entries(ImageData).map(([key, path]) => (
        <img key={key} className="grid-item" src={require(`${path}`)} alt={key} />
      ))}
    </div>
  );
}

export default App;
