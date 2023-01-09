import React from "react";
import "./AdvertisementCard.css";
import advert from "../../assets/advert.png";
import placeholder from "../../assets/placeholder.png";
import dots from "../../assets/Icons/dots.png";
import share from "../../assets/Icons/share.png";
import unlike from "../../assets/Icons/unlike.png";
import unbookmark from "../../assets/Icons/unbookmark.png";

const AdvirtesementCard = () => {
  return (
    <div className="advert">
      <div className="advert-user-container">
        <div className="advert-user-container--left">
          <div className="advert-user--image">
              <div className="advert-image-container">
                <img className="advert-profile-img" src={advert} alt="" />
              </div>
          </div>
          <div className="advert-user-info">
            <p className="advert-user-name">Milupa</p>
            <p className="advert-user-occupation">SPONSORED</p>
          </div>
        </div>
        <div className="advert-user-container--right">
          <img src={dots} alt="more button" />
        </div>
      </div>
      <div className="advert-main-image-container">
        {placeholder && (
          <div className="advert-main-image">
            <img src={placeholder} alt="" />
          </div>
        )}
      </div>
      <div className="advert-widget-container">
        <div className="advert-widget-container--left">
          <div className="advert-like">
            <img src={unlike} alt="not-liked" />
            <p>3</p>
          </div>
          <div className="advert-share">
            <img src={share} alt="share" />
            <p>1</p>
          </div>
        </div>
        <div className="advert-widget-container--right">
          <div className="advert-bookmark">
            <img src={unbookmark} alt="bookmark" />
          </div>
        </div>
      </div>
      <div className="advert-info-container">
        <div className="advert-info--item">
          <p className="advert-time-text">2</p>
          <p className="advert-info--item-style">Min • </p>
        </div>
        <div className="advert-info--item">
          <p className="advert-time-text">4</p>
          <p className="advert-info--item-style">Views • </p>
        </div>
        <div className="advert-info--item">
          <p className="advert-time-text">5</p>
          <p className="advert-info--item-style">Comments</p>
        </div>
      </div>
      <div className="advert-maintext-container">
        <p className="advert-maintext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>
      <ul className="advert-tags-container">
        <li className="advert-tag">#child</li>
        <li className="advert-tag">#doctor</li>
        <li className="advert-tag">#hospital</li>
        <li className="advert-tag">#fever</li>
      </ul>
      <form className="advert-comment-inputfield">
        <input
          type="text"
          className="advert-input"
          placeholder="Comment This"
        />
        <button className="advert-button">Post</button>
      </form>
    </div>
  );
};

export default AdvirtesementCard;
