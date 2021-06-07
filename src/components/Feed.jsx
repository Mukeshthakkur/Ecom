import React from "react";
import "./feed.css";
import Banner from "../images/banner.png";
import Post from "./post";

function Feed() {
  return (
    <div>
      <div className="feed">
        <img
          className="banner"
          src={Banner}
          alt="Banner of Scholarshipsadvice.com"
        />
        <h3 className="m-5"> Latest Scholarships</h3>
      </div>

      <div className="latest__container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

    </div>
  );
}

export default Feed;
