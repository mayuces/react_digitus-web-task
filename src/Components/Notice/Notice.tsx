import React from 'react'
import "./Notice.css"
import notice from "../../assets/notice.png";
import purple_dot from "../../assets/Icons/purple-dot.png"
import gray_dot from "../../assets/Icons/gray-dot.png"


const Notice = () => {
  return (
    <>
      <div className='notice'>
        <div className='notice-text-container'>
          <p className='notice-headline'>Momista</p>
          <p className='notice-headline'>Family Meeting</p>
          <p className='notice-headline notice-date'>July'19</p>
        </div>
        <div>
          <img className='notice-image' src={notice} alt="notice" />
        </div>
        <button className='notice-btn'>Join</button>
      </div>
      <div className='dots'>
        <img className="dots-dot" src={purple_dot} alt="" />
        <img className="dots-dot" src={gray_dot} alt="" />
        <img className="dots-dot" src={gray_dot} alt="" />
        <img className="dots-dot" src={gray_dot} alt="" />
      </div>
    </>
  )
}

export default Notice