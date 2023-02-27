import React from "react"
import michaelPhelps from '../resources/michaelPhelps.jpg'
import starImage from '../resources/star.png'

export default function Card() {
    return (
        <div className="card">
            <img src={michaelPhelps} className="card--image" alt='michael phelps'/>
            <div className="card--stats">
                <img src={starImage} className="card--star" alt='star'/>
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Michael Phelps</p>
            <p><span className="bold">From $236</span> / person</p>
        </div>
    )
}