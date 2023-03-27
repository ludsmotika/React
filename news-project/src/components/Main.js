import React from "react";
import getDailyNews from '../api.js'
import NewsList from './NewsList.js'
//import the methods for getting the data from the api file


function Main(props) {

    getDailyNews();

    return (<div className={props.darkMode ? 'dark' : ''}>
        <h1 className="custom">Header element</h1>
        <NewsList />

    </div>);
}


export default Main;