import React from 'react'
import ellipsis from '../../../../images/icon-ellipsis.svg';
import "./style.css"
const Card = ({ title, category, currHrs, prevHrs }) => {
  return (
    <div className="card-container button">
        <div className="card-header pb-1">
          <h4 className="md bold">{title}</h4>
          <img className="button" src={ellipsis} />
        </div>
        <span className="xl thin">{currHrs}hrs</span>
        <span className="xs regular secondary">{category} - {prevHrs}hrs</span>
    </div>
  )
}

export default Card