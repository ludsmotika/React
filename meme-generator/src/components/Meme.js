import React from "react";
import memesData from '../memesData.js'

export default function Meme() {

    const [meme,setMemeUrl] = React.useState('');

    function changeImageUrl(){
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeUrl(memesArray[randomNumber].url);
    }

    return (
        <main>
            <div className="form">
                <input type='text' placeholder="Top text" className="form--input"></input>
                <input type='text' placeholder="Bottom text" className="form--input"></input>
                <button className='form--button' onClick={changeImageUrl}>Get a new meme image  🖼</button>
                <img src={meme} className='meme--image'/>
            </div>
        </main>
    );
}