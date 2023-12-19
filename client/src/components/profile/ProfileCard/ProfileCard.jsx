import React from "react";
import "./ProfileCard.css";

function ProfileCard(user) {
  return (
    <div className="profile-card">
      <img src={user.profilephoto} alt="" className="profile-photo" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-about">{user.about}</p>
    </div>
  );
}

export default ProfileCard;
