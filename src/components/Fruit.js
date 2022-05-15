import React, {useState} from "react";

function ChooseFruit({text, fruitName, setFruit}){

    function  setFruitMin (){
        setFruit(fruitName > 0 ? fruitName-1 : fruitName)
    }
    function setFruitPlus(){
        setFruit(fruitName+1);
        console.log(text,fruitName);
    }
    return(
        <div id="div">
            <h2>{text}</h2>
            <button
                name={text}
                onClick={setFruitMin}
            >-</button>
            <h2>{fruitName}</h2>
            <button
                name={text}
                onClick={setFruitPlus}
            >+</button>
            <p>{text}</p>
            <p>{fruitName}</p>
        </div>
    );
}

export default ChooseFruit;