import React from 'react'

import "./style.css"

const CardAccent = ({ color, image }) => {
  return (
    <div className="card-accent-container" style={{backgroundColor: color}}>
        <img className="icon-img" src={image} />
    </div>
  )
}

export default CardAccent