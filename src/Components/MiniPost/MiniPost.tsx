import React from "react";
import "./MiniPost.css";
import PostIMG from "../../assets/PostIMG.png";
import placeholder from "../../assets/placeholder.png";

const MiniPost = () => {
  return (
    <div className="minipost">
      <div className="minipost-user-info">
        <div className="minipost-user-img-container">
          <img className="minipost-user-img" src={PostIMG} alt="profile" />
        </div>
        <p className="minipost-user-name">John Doe</p>
      </div>
      <div className="minipost-main-content">
        <img className="minipost-main-img" src={placeholder} alt="mainimg" />
      </div>
      <p className="minipost-main-text">
        Lorem ipsum, dolor sit amet consectetur :/
      </p>
      <div className="minipost-widgets">
        <div className="minipost-info--item">
          <p className="minipost-time-text">2</p>
          <p className="minipost-info--item-style">Likes </p>
        </div>
        <div className="minipost-info--item">
          <p className="minipost-time-text">312</p>
          <p className="minipost-info--item-style">Comments</p>
        </div>
      </div>
    </div>
  );
};

export default MiniPost;
