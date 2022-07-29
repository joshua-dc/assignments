import React from "react"
import Navbar from "./components/Navbar"
import Past from "./components/Card"
import Data from "./Data"
// import Space from "./components/Space"

export default function App() {
  const locationMap = Data.map(item => {
    return (
      <Past
      key={item.id}
      {...item}
      />
  )
  })

  return (
    <div>
      <Navbar />
      {/* <Space /> */}
      <section className="pastlist">
        {locationMap}
      </section>
    </div>
  )
}