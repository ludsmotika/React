import React from "react";
import axios from "axios";

function Header(props) {


    let [isHovered, setIsHovered] = React.useState(false);
    let [bestTitles, setTitles] = React.useState([]);

    React.useEffect(() => {

        const getArticles = async () => {
            let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9cf6b520a3fe4addaa414169eb6ae1f9');
            setTitles(res.data.articles.map(x => x.title));
            console.log(res.data.articles.map(x => x.title))
        }

        getArticles();

    }, []);


    return (<header className={props.darkMode ? 'dark' : ''} >

        <img className='header-logo' src='./resources/logo.png'></img>

        <div className="dropdown">


            <button className={`dropbtn ${props.darkMode ? 'dark' : ''}`}
                onMouseOver={() => { setIsHovered(!isHovered) }}
                onMouseOut={() => { setIsHovered(!isHovered) }}>
                Category {isHovered ? '▲' : '▼'}
            </button>

            <div className={`dropdown-content ${props.darkMode ? 'dark' : ''}`}>
                <a href="#">Global</a>
                <a href="#">Bulgaria</a>
                <a href="#">Crypto</a>
                <a href="#">Finance</a>
            </div>

        </div>

        <div className={`scroll-container ${props.darkMode ? 'dark' : ''}`}>
            <div className="scroll-text">{bestTitles.map(x => x.substring(0, x.indexOf(' - '))).join('\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002')}</div>
        </div>

        <img className="header-img" src={props.darkMode ? './resources/sun.png' : './resources/moon.png'} onClick={() => props.toogleDarkSide()}></img>
    </header >);
}


export default Header;