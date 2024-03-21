import React from 'react'
import "../Card/Cards.css"

const Cards = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">Learn more</button>
    </div>
  )
}

export default Cards