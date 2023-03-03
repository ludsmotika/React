import React from "react"

export default function Card(props) {

    let badgeText = '';
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    }
    else if (props.country === "Online") {
        badgeText = "ONLINE"
    }

    let item= props.item;

    return (
        <div className="card">

            <div className="image-container">
                {badgeText !== '' && <div className="card--badge">{badgeText}</div>}
                <img src={`../resources/${item.coverImg}`} className="card--image" alt='creator' />
            </div>
            <div className="card--stats">

                <img src='../resources/star.png' className="card--star" alt='star' />
                <span>{item.stats.rating}</span>
                <span>({item.stats.reviewCount}) • </span>
                <span>{item.location}</span>
            </div>
            <p>{item.title}</p>
            <p><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}