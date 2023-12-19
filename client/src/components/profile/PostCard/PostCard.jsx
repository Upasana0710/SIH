import React from "react";
import "./PostCard.css";

function UserPost(props) {
  return (
    <div className="post-card">
      <img src={props.profilephoto} alt="" className="post-photo" />
      <h5 className="post-name">{props.postname}</h5>
      <div className="post">{props.post}</div>
    </div>
  );
}

export default UserPost;
