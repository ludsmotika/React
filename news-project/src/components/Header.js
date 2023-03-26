import React from "react";

function Header(props) {


    let [isHovered, setIsHovered] = React.useState(false);

    return (<header className={props.darkMode ? 'dark' : ''} >

        <img className='header-logo' src='./resources/logo.png'></img>

        <div className="dropdown">


            <button className={`dropbtn ${props.darkMode ? 'dark' : ''}`}
                onMouseOver={() => { setIsHovered(!isHovered) }}
                onMouseOut={() => { setIsHovered(!isHovered) }}>
                Category {isHovered ? '▲' : '▼'}
            </button>

            <div className="dropdown-content">
                <a href="#">Daily feed</a>
                <a href="#">This Week bangers</a>
                <a href="#">Finance</a>
            </div>
        </div>

        <img className="header-img" src={props.darkMode ? './resources/sun.png' : './resources/moon.png'} onClick={() => props.toogleDarkSide()}></img>
    </header >);
}


export default Header;