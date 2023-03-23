import React from "react";
import Dice from "./Dice"
import { nanoid } from 'nanoid'
import Confetti from "react-confetti";

export default function Game() {

    const [dices, setDices] = React.useState(getNewDiceNumbers());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        let allAreHeld = dices.every(x => x.isHeld === true);
        let firstDiceNumber = dices[0].value;
        let allHaveTheSameValue = dices.every(x => x.value === firstDiceNumber);

        if (allAreHeld && allHaveTheSameValue) {
            setTenzies(true);
            console.log("You won");
        }
    }, [dices]);

    function getNewDiceNumbers() {
        let array = [];

        for (let i = 0; i < 10; i++) {
            array.push({ key: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false })
        }
        return array;
    }

    function holdDice(id) {

        setDices(oldDices => oldDices.map(x => x.key === id ? { ...x, isHeld: !x.isHeld } : { ...x }));
    }

    const diceArray = dices.map(x => <Dice key={x.key} value={x.value} isHeld={x.isHeld} holdDice={() => holdDice(x.key)} />);

    function roll() {

        if (tenzies === false) {
            setDices(oldDices => oldDices.map(x => x.isHeld === true ? { ...x } : { ...x, value: Math.ceil(Math.random() * 6) }));
        }
        else {
            setDices(getNewDiceNumbers());
            setTenzies(false);
        }

    }

    return (
        <div className="game-element">

            {tenzies && <Confetti />}

            <div className="dice-container">
                {diceArray}
            </div>

            <button className="roll-button" onClick={roll}>{tenzies ? "New Game" : "Roll"}</button>
        </div>
    )
}