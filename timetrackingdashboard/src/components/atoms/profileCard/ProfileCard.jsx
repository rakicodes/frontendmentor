import React from 'react'

import "./style.css"

const ProfileCard = ({ imgUrl, firstName, lastName }) => {
  return (
    <div className="profile-card-container">
      <img className="profile-img" src={imgUrl} alt={`profile picture for ${firstName} ${lastName}`} />
      <div className="info-container">
        <span className="xs regular pt-2">Report for</span>
        <div className="name-container">
          <span className="lg thin white w-100">{firstName}</span>
          <span className="lg thin white w-100">{lastName}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard