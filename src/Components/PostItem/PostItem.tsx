import React from "react";
import "./PostItem.css";
import PostIMG from "../../assets/PostIMG.png";
import placeholder from "../../assets/placeholder.png";
import dots from "../../assets/Icons/dots.png";
import liked from "../../assets/Icons/liked.png";
import share from "../../assets/Icons/share.png";
import unlike from "../../assets/Icons/unlike.png";
import bookmark from "../../assets/Icons/bookmark.png";
import unbookmark from "../../assets/Icons/unbookmark.png";
import check from "../../assets/Icons/check-bold.png";

const PostItem = () => {
  const isDoctor = true;
  const isLiked = true;
  const isBookmark = true;

  return (
    <div className="postitem">
      <div className="postitem-user-container">
        <div className="postitem-user-container--left">
          <div className="postitem-user--image">
            {isDoctor ? (
              <div className="postitem-image-container--doctor">
                <div className="postitem-image-container">
                  <img className="postitem-profile-img" src={PostIMG} alt="" />
                </div>
              </div>
            ) : (
              <div className="postitem-image-container--user">
                <div className="postitem-image-container">
                  <img className="postitem-profile-img" src={PostIMG} alt="" />
                </div>
              </div>
            )}
          </div>
          <div className="postitem-user-info">
            <p className="postitem-user-name">John Doe</p>
            {isDoctor && (
              <p className="postitem-user-occupation">Medical Doctor</p>
            )}
          </div>
        </div>
        <div className="postitem-user-container--right">
          <img src={dots} alt="more button" />
        </div>
        {/* {isDoctor && (
          <div className="postitem-doctor-boderline">

          </div>
        )} */}
      </div>
      <div className="postitem-main-image-container">
        {placeholder && (
          <div className="postitem-main-image">
            <img src={placeholder} alt="" />
          </div>
        )}
      </div>
      <div className="postitem-widget-container">
        <div className="postitem-widget-container--left">
          <div className="postitem-like">
            {isLiked ? (
              <>
                <img src={liked} alt="liked" />
                <p>3</p>
              </>
            ) : (
              <>
                <img src={unlike} alt="not-liked" />
                <p>3</p>
              </>
            )}
          </div>
          <div className="postitem-share">
            <img src={share} alt="share" />
            <p>1</p>
          </div>
        </div>
        <div className="postitem-widget-container--right">
          <div className="postitem-bookmark">
            {isBookmark ? (
              <>
                <img src={bookmark} alt="bookmark" />
                <img src={check} alt="check" className="check"/>
              </>
            ) : (
              <img src={unbookmark} alt="bookmark" />
            )}
          </div>
        </div>
      </div>
      <div className="postitem-info-container">
        <div className="postitem-info--item">
          <p className="postitem-time-text">2</p>
          <p className="postitem-info--item-style">Min • </p>
        </div>
        <div className="postitem-info--item">
          <p className="postitem-time-text">4</p>
          <p className="postitem-info--item-style">Views • </p>
        </div>
        <div className="postitem-info--item">
          <p className="postitem-time-text">5</p>
          <p className="postitem-info--item-style">Comments</p>
        </div>
      </div>
      <div className="postitem-maintext-container">
        <p className="postitem-maintext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>
      <ul className="postitem-tags-container">
        <li className="postitem-tag">#child</li>
        <li className="postitem-tag">#doctor</li>
        <li className="postitem-tag">#hospital</li>
        <li className="postitem-tag">#fever</li>
      </ul>
      <form className="postitem-comment-inputfield">
        <input
          type="text"
          className="postitem-input"
          placeholder="Comment This"
        />
        <button className="postitem-button">Post</button>
      </form>
    </div>
  );
};

export default PostItem;
