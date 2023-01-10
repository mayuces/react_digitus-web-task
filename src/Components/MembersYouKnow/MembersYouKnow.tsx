import React from "react";
import "./MembersYouKnow.css";
import prev from "../../assets/Icons/prev.png";
import next from "../../assets/Icons/next.png";
import MembersYouKnowItem from "../MembersYouKnowItem/MembersYouKnowItem";

const MembersYouKnow = () => {
  return (
    <div className="slider-area">
      <div className="slider-area-textfield">
        <p className="slider-text">Members You May Know</p>
        <button className="slider-seeAll-Btn">SEE ALL</button>
      </div>
      <div className="slider-area-cards">
        <MembersYouKnowItem isDoctor={true} />
        <MembersYouKnowItem isDoctor={false} />
        <MembersYouKnowItem isDoctor={false} />
      </div>
      <div className="slider-button-next slider-Btn">
        <img src={next} alt="next" />
      </div>
      <div className="slider-button-prev slider-Btn">
        <img src={prev} alt="prev" />
      </div>
    </div>
  );
};

export default MembersYouKnow;
