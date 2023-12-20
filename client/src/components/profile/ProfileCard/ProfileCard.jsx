import React from "react";
import "./ProfileCard.css";

function ProfileCard(user) {
  return (
    <div className="profile-card">
      <h2 className="profile-name">{user.name}</h2>
      <div className="profile_container_credentials">
        <p className="profile-about">{user.credentials}</p>
        <p className="profile-about">{`RATING - ${user.rating}⭐`}</p>

        <p className="profile-about">{user.branch}</p>

        <p className="profile-about">{user.college}</p>
      </div>
      <p className="profile-about">{user.about}</p>
    </div>
  );
}

export default ProfileCard;
