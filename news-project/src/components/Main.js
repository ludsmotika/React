import React from "react";

function Main(props) {
    return (<div className={props.darkMode ? 'dark' : ''}>
        <h1>Header element</h1>
    </div>);
}


export default Main;