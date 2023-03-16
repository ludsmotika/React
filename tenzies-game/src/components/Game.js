import React from "react";
import Dice from "./Dice"

export default function Game() {
    return (
        <div>
            <div className="dice-container">
                <Dice value="1" />
                <Dice value="2" />
                <Dice value="5" />
                <Dice value="4" />
                <Dice value="3" />
                <Dice value="2" />
                <Dice value="5" />
                <Dice value="2" />
                <Dice value="3" />
                <Dice value="2" />
            </div>

            <button className="roll-button">Roll</button>
        </div>
    )
}