import React from "react"
import Name from "./Name"
import Navbar from "./Navbar"
import Main from "./Main"
import Pic from "./Pic"
import Footer from "./Footer"
import "./style.css"

export default function App () {
    return (
        <div className="container2">
            <Pic />
            <Name />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}