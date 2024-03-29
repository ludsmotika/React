import React from "react";


export default function Dice(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (

        < div className="die-face" style={styles} onClick={() => props.holdDice()}>
            {props.value}
        </ div >
    )
}