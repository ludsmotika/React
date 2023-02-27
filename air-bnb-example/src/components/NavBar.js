import React from "react";
import logo from '../resources/logo.png'

export default function NavBar(){
    return (
        <nav className='NavBar'>
            <img className='Logo' src={logo} alt='logo'/>
        </nav>
    )
}