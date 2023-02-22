import React from 'react';
import logo from './logo.png'

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <img className= 'logo' src={logo} alt='logo'></img>
            <h3>Pizza's lovers</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}