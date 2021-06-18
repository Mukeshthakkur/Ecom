import React, { useState } from "react";
import "./addpost.css";


function Addpost() {

    const [title, setTitle] = useState('');
    const [post, setPost] = useState("");

    const handleSubmit= e => {
        e.preventDefault()

        console.log({"Title =>": title , "Post" : post})
  
    }

    return (
    <div className="addpost">
      <h3>Post Page</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="title__input"
          type="text"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title.."
        />

        <input
          className="post__input"
          type="text"
          placeholder="Enter post body"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <input type="file" placeholder="Post Feature Image" className="img__input" />
          <div className="btn__div">
              <button className="publish__btn" >
                Publish Post
              </button>
              <button className="draft__btn">Draft</button>
          </div>
      </form>
    </div>
  );
}

export default Addpost;
