import React from "react";

import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <React.Fragment>
      <li className={styles.content}>
        <div className={styles.number}>{props.id}</div>
        <div className={styles.text}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.topic}>{props.topic}</div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Post;
