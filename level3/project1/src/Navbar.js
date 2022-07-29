import React from "react"

function clickMe(){
    alert("you clicked me!");
}

export default function Navbar() {
    return (
        <div>
            <button className="butt1">
                Email
            </button>
            <button onClick={clickMe} className="butt2">
                LinkedIn
            </button>
        </div>
    )
}