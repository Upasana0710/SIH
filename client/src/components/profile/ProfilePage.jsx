import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import profilephoto from "../../assets/profilephoto.png";
import UserPost from "./PostCard/PostCard";
import NewPost from "./NewPost/NewPost";

import "./ProfilePage.css";

const data = [
  {
    profilephoto: "profilephoto.png",
    postname: "Name",
    post: "This is my post1",
  },
  {
    postname: "Name",
    post: "This is my post2",
  },
  {
    postname: "Name",
    post: "This is my post3",
  },
  {
    postname: "Name",
    post: "This is my post4",
  },
];

function ProfilePage() {
  const posts = data.map((item) => {
    return (
      <UserPost
        key={item.postname}
        profilephoto={item.profilephoto}
        postname={item.postname}
        post={item.post}
      />
    );
  });

  return (
    <section className="profile_container_section">
      <ProfileCard
        profilephoto={profilephoto}
        name="This is my name"
        about="This is my about.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corporis neque illum eum omnis quis inventore iusto cupiditate? Reiciendis provident sed iste sapiente, necessitatibus nesciunt unde laudantium natus expedita pariatur!"
      />
      <NewPost />
      {posts}
    </section>
  );
}

export default ProfilePage;
