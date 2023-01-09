import React from 'react'
import "./MembersYouKnowItem.css"
import PostIMG from "../../assets/PostIMG.png";


const MembersYouKnowItem = () => {
  const isDoctor = false;

  return (
    <div className='member-card'>
      <button className='member-card-discard'>
        x
      </button>
      <div className='member-card-profile-img'>
          <img src={PostIMG} alt="" />
      </div>
      <p className='member-card-name'>John Doe</p>
      {isDoctor && (
        <p className='member-card-doctor'>Medical Doctor</p>
      )}
      <p className='member-card-location'>Istanbul</p>
      {isDoctor ? (
        <button className='member-card-button-doctor'>Follow</button>
      ): (
        <button className='member-card-button'>Follow</button>

      )}
    </div>
  )
}

export default MembersYouKnowItem