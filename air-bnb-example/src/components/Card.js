import React from "react"

export default function Card(props) {
    return (
        <div className="card">

            <div class="image-container">
                <img src={`../resources/${props.img}`} className="card--image" alt='creator' />
            </div>
            <div className="card--stats">

                <img src='../resources/star.png' className="card--star" alt='star' />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}