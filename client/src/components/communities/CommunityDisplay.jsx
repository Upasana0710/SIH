import React, { useEffect, useState } from "react";

import styles from "./CommunityDisplay.module.css";

import { getCommunityById, getUser } from "../../api/api";
import { useParams } from "react-router-dom";

const CommunityDisplay = () => {
  const id = useParams().id;

  const [community, setCommunity] = useState(null);

  useEffect(() => {
    const fetchCommunityById = async () => {
      try {
        const response = await getCommunityById(
          id,
          localStorage.getItem("user_info")
        );

        if (response.status === 200) {
          const user = await getUser(response.data.community.admin);

          if (user.status === 200) {
            setCommunity({ ...response.data.community, admin: user.data.name });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCommunityById();
  }, [id, community]);

  return (
    <div className={styles.community_page}>
      {community ? (
        <>
          <div className={styles.community_details}>
            <h1 className={styles.community_title}>{community.title}</h1>
            <p className={styles.community_desc}>{community.description}</p>
            <h3 className={styles.community_admin}>Admin: {community.admin}</h3>
          </div>
          <div className={styles.community_posts}>
            <h4 className={styles.community_post_header}>Posts: </h4>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CommunityDisplay;
