import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { getUser, getUserByToken, getUserPosts } from "../../api/api";

import ProfileCard from "./ProfileCard/ProfileCard";

import Sidebar from "../right-sidebar/Sidebar";

import styles from "./ProfilePage.module.css";
import { useSelector } from "react-redux";
import PostCard from "../feed/feed_posts/post_cards/PostCard";

function ProfilePage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [myUser, setMyUser] = useState(null);
  const [hasUserdetails, setHasUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  let user_posts;

  const userId = params.get("uid");

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchUser() {
      try {
        if (userId) {
          setMyUser(false);
          const response = await getUser(userId);
          setUserDetails(response.data);
          if (userId === currentUser._id) {
            setMyUser(true);
          }
          setHasUserDetails(true);
        } else {
          setMyUser(true);
          const response = await getUserByToken(
            localStorage.getItem("user_info")
          );
          setUserDetails(response.data);
          setHasUserDetails(true);
        }

        const response1 = await getUserPosts(
          userId ? userId : currentUser._id,
          localStorage.getItem("user_info")
        );
        if (response1.status === 404) {
          setUserPosts([]);
        }

        if (response1.status === 200) {
          const sorted_posts = response1.data.posts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setUserPosts(sorted_posts);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [userId, currentUser._id]);

  user_posts =
    hasUserdetails && userPosts !== null ? (
      userPosts.length !== 0 ? (
        userPosts.map((item) => <PostCard key={item._id} post={item} />)
      ) : (
        <h3>No posts found!</h3>
      )
    ) : (
      <h3>Loading posts!</h3>
    );
  return (
    <div>
      <Sidebar />
      <section className={styles.profile_container_section}>
        <div className={styles.profile_main_section}>
          {hasUserdetails && <ProfileCard user={userDetails} />}
          <div className={styles.vertical_line}></div>
          <div className={styles.profile_actions}>
            {userId && !myUser && (
              <div className={styles.redirect_container}>
                <button
                  type="button"
                  className={styles.redirect_slot_booking_button}
                >
                  <Link to="/home/slot" className={styles.redirect_link_slot}>
                    GO TO SLOT BOOKING
                  </Link>
                </button>
              </div>
            )}
            {(!userId || myUser) && (
              <button type="button" className={styles.redirect_post_button}>
                <Link
                  to={`/home/create-post/${userId ? userId : currentUser._id}`}
                  target="_blank"
                  className={styles.redirect_link_slot}
                >
                  CREATE A POST
                </Link>
              </button>
            )}
          </div>
        </div>
        <div className={styles.horizontal_line}></div>
        {user_posts}
      </section>
    </div>
  );
}

export default ProfilePage;
