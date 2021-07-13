
import './App.css';
import React, { useState } from  'react';
import Boxes from './components/Boxes';
import New from './components/New';

function App() {
  const [boxes, setBoxes] = useState([
    {color:"green"},
    {color:"grey"},
    {color:"red"}
  ])

  const createBox = (newBox) => {
    setBoxes([...boxes, newBox])
  }

  const deleteBox = (deleteIdx) => {
    console.log('idx to be deleted', deleteIdx);
    const newBoxes = boxes.filter((box, i) => {
      if (deleteIdx !== i) {
        return true;
      } else return false;
    })

    setBoxes(newBoxes);
  }
  
  return (
    <div className="App">
      <h3>boxes</h3>
      <New createBox={createBox}/>
      {
        boxes.map((box,i) => {
          return <Boxes key={i} box={box} idx={i} deleteBox={deleteBox}/>
        })
      }
    </div>
  );
}

export default App;
