import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CommunityPage.module.css";

import { getCommunities } from "../../../api/api";

const CommunityPage = () => {
  const [communites, setCommunities] = useState([]);

  const navigate = useNavigate();

  let output = communites.map((community) => (
    <li key={community._id} className={styles.community_item}>
      {community.title}
    </li>
  ));

  useEffect(() => {
    const fetchAllCommunities = async () => {
      try {
        const response = await getCommunities(
          localStorage.getItem("user_info")
        );

        if (response.status === 200) {
          setCommunities(response.data.communities);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCommunities();
  });

  if (communites.length === 0) {
    output = (
      <div className={styles.error_box}>
        <p className={styles.p_special}>No Communities Found</p>
      </div>
    );
  }

  const handleCreateCommunity = () => {
    navigate("/home/create-community");
  };

  return (
    <React.Fragment>
      <div className={styles.feed_posts_container}>
        <div className={styles.create_community}>
          <button
            className={styles.create_community_btn}
            onClick={handleCreateCommunity}
          >
            Create Community
          </button>
        </div>
        <ul className={styles.communities_list}>{output}</ul>
      </div>
    </React.Fragment>
  );
};

export default CommunityPage;
