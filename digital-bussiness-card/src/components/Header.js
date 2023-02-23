import React from 'react';
import myPhoto from './resources/myPhoto.jpg'

export default function Header(){
    return (
        <div className='Header'>
            <img className='header--img' src={myPhoto} alt='picture'></img>
        </div>
    );
}