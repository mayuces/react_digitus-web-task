import React from "react";
import "./PostBox.css";
import PostIMG from "../../assets/PostIMG.png";
import smile from "../../assets/Icons/smile.png";
import add from "../../assets/Icons/add.png";

const PostBox = () => {
  return (
    <div className="postbox">
      <div className="postbox-content-container">
        <div className="postbox-user-img--container">
          <img src={PostIMG} alt="userImg" className="postbox-user-img"/>
        </div>
        <input className="postbox-input" type="text" placeholder="Write something, Merve" />
      </div>
      <div className="postbox-widgets">
        <div className="postbox-like-icon">
          <img src={smile} alt="like" />
        </div>
        <div className="postbox-add-icon">
          <img src={add} alt="add" />
        </div>
      </div>
    </div>
  );
};

export default PostBox;
