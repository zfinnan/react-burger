import React, { useState } from 'react';
import BurgerPane from './Components/BurgerPane'
import IngredientsPane from './Components/IngredientsPane'
import './App.css';

function App() {
  const [layers, setLayers] = useState([])

  const addLayer = (layer) => {
    const newLayers = [layer, ...layers]
    setLayers(newLayers)
  }

  const clear = () => {
    setLayers([])
  }

  return (
    <div className="container">
      <IngredientsPane addLayer={addLayer}/>
      <BurgerPane layers={layers} clear={clear}/>
    </div>
  );
}

export default App;