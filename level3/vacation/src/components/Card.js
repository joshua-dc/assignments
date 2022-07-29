import React from "react"

export default function Card(props) {
    let badgeText
    if (props.price <= 500) {
        badgeText = "$"
    } else if (props.price < 1000) {
        badgeText = "$$"
    } else badgeText = "$$$"
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">Time to go: {props.timeToGo}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--desc">{props.description}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}