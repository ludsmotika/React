import React from "react";
import instaLogo from './resources/instaLogo.svg'
import facebookLogo from './resources/facebookLogo.svg'
import twitterLogo from './resources/twitterLogo.svg'
import githubLogo from './resources/githubLogo.svg'

export default function Footer() {
    return (
        <div className='Footer'>
            <a href="https://www.instagram.com/_daniel_ks_/">
                <img src={instaLogo} alt="alternative"></img>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004545909873">
                <img src={facebookLogo} alt="alternative"></img>
            </a>
            <a href="https://twitter.com/DanielS47338407">
                <img src={twitterLogo} alt="alternative"></img>
            </a>
            <a href="https://github.com/ludsmotika">
                <img src={githubLogo} alt="alternative"></img>
            </a>
        </div>
    );
}

