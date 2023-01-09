import React from "react";
import "./Navbar.css";
import logo from "../../assets/DigitusLogo.png";
import plus from "../../assets/plus-logo.png";
import search from "../../assets/Icons/magnify.png";
import mail from "../../assets/Icons/mail.png";
import bell from "../../assets/Icons/bell.png";
import profile from "../../assets/Icons/profile.png";
import Arrow from "../../assets/Icons/Arrow.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="HomeIcon">
          <img src={logo} alt="HomeIcon" />
        </div>
      </div>
      <div className="mid">
        <div className="PlusIcon">
          <img src={plus} alt="PlusIcon" />
        </div>
        <ul className="mid-links">
          <li className="mind-links_link">Moms</li>
          <li className="mind-links_link">Experts</li>
          <li className="mind-links_link">Explore</li>
          <li className="mind-links_link">Forum</li>
          <li className="mind-links_link">MomTalk</li>
        </ul>
      </div>
      <div className="right">
        <div className="right-search">
          <img src={search} alt="search" />
        </div>
        <div className="right-widget">
          <div className="notify-container">
            <img src={mail} alt="mail" />
            <span className="notify-bubble">4</span>
          </div>
          <div className="notify-container">
            <img src={bell} alt="bell" />
            <span className="notify-bubble">12</span>
          </div>
        </div>
        <div className="right-profile">
          <img src={profile} alt="profile" />
          <button className="right-button">
            <img src={Arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
