import React, {useState} from 'react';
import './App.css';
import "./components/fruit.css";
import ChooseFruit from "./components/Fruit";
import Formulier from './Formulier'

function App() {
  const [strawberry, setStrawberry] = useState(0);
  const [kiwi, setKiwi] = useState(0);
  const [apple, setApple] = useState(0);
  const [banana, setBanana] = useState(0);

  return (
    <>
        <div id="div2">
          <ChooseFruit fruitName={strawberry} setFruit={setStrawberry} text="🍓Aarbeien" />
          <ChooseFruit fruitName={kiwi} setFruit={setKiwi} text="🍌banana" />
          <ChooseFruit fruitName={apple} setFruit={setApple} text="🍏Appels" />
          <ChooseFruit fruitName={banana} setFruit={setBanana} text="🥝Kiwi`s" />
            <button
                type="reset"
                id="reset"
                onClick={()=>{
                  setStrawberry(0);
                  setKiwi(0);
                  setApple(0);
                  setBanana(0);
                }}
            >Reset</button>
        </div>
        <Formulier/>
    </>
  );
}

export default App;
