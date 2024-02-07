import React from "react";
import "./PostCard.css";

function UserPost(props) {
  return (
    <div className="post-card">
     
      <h5 className="post-name">{props.title}</h5>
      {/* <h5 className="post-name">Category{props.category}</h5> */}
      <div className="post">{props.text}</div>
    </div>
  );
}

export default UserPost;
