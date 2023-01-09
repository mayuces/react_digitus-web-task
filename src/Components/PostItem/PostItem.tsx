import React from "react";
import "./PostItem.css";

const PostItem = () => {
  const isDoctor = true;
  const isLiked = true;

  return (
    <div className="postitem">
      <div className="postitem-user-container">
        {isDoctor ? (
          <div className="postitem-image-container doctor">
            <img src="" alt="" />
          </div>
        ) : (
          <div className="postitem-image-container user">
            <img src="" alt="" />
          </div>
        )}
        <div className="postitem-image-container">
          <img src="" alt="" />
        </div>
        <p className="postitem-user-name"></p>
        {isDoctor && <p className="postitem-user-name">Medical Doctor</p>}
      </div>
      <div className="postitem-widget-container">
        <div className="postitem-like">
          {isLiked ? (
            <img src="" alt="liked" />
          ) : (
            <img src="" alt="not-liked" />
          )}
        </div>
        <div className="postitem-share">
          <img src="" alt="share" />
        </div>
      </div>
      <div className="postitem-info-container">
        <p className="postitem-time-span">2 min</p>
        <p className="postitem-view-count">4 view</p> 
        <p className="postitem-comment-count">5 comments</p> 
      </div>
      <ul className="postitem-tags-container">
        <li className="postitem-tag">#child</li>
        <li className="postitem-tag">#doctor</li>
        <li className="postitem-tag">#hospital</li>
        <li className="postitem-tag">#fever</li>
      </ul>
      <div className="postitem-comment-inputfield">
        <input type="text" className="postitem-input" placeholder="Comment This"/>
        <button>
          Post
        </button>

      </div>
    </div>
  );
};

export default PostItem;
