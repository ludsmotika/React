import React from "react";

function Header(props) {
    return (<header className={props.darkMode ? 'dark' : ''} >
        <img className='header-logo' src='./resources/logo.png'></img>
        <h1>Daily News</h1>
        <img className="header-img" src={props.darkMode ? './resources/sun.png' : './resources/moon.png'} onClick={() => props.toogleDarkSide()}></img>
    </header>);
}


export default Header;