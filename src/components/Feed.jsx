import React from "react";
import "./feed.css";
import Banner from "../images/banner.png";
import Postwid from "./postwid";

function Feed() {
  return (
    <div>
      <h3 className="m-5"> Latest Scholarships</h3>
      <div className="feed">
        <img
          className="banner"
          src={Banner}
          alt="Banner of Scholarshipsadvice.com"
        />
        
      </div>

      <div className="latest__container">
        <Postwid />
        <Postwid />
        <Postwid />
        <Postwid />
      </div>
    </div>
  );
}

export default Feed;
