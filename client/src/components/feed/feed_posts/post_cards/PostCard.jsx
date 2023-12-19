import React, { useState } from "react";

import styles from "./PostCard.module.css";
import Btn02 from "../../../../ui/Btn_02";
import Btn03 from "../../../../ui/Btn_03";

const PostCard = (props) => {
  const [isShowLess, setIsShowLess] = useState(true);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const opinionHandler = (opinion) => {
    if (opinion === "like") {
      setLike((prevState) => !prevState);
      setDislike((prevState) => !!prevState);
    }
    if (opinion === "dislike") {
      setLike((prevState) => !!prevState);
      setDislike((prevState) => !prevState);
    }
  };

  const toggleShowHandler = () => {
    setIsShowLess((prevState) => !prevState);
  };

  const showBtnContent = (
    <p className={styles.show_content}>{`Show ${
      isShowLess ? "More" : "Less"
    }...`}</p>
  );

  const likeClasses = `${
    like ? "fa-solid fa-thumbs-up liked" : "fa-solid fa-thumbs-up"
  }`;
  const dislikeClasses = `${
    dislike ? "fa-solid fa-thumbs-down disliked" : "fa-solid fa-thumbs-down"
  }`;

  const content = (
    <div>
      <div
        className={`${styles.post_content} ${
          isShowLess ? styles.post_content_less : styles.post_content_more
        }`}
      >
        <div>
          <p className={styles.content_text}>{props.post.content}</p>
        </div>
      </div>
      <div className={`${isShowLess ? styles.background : ""}`}></div>
    </div>
  );

  const topics = (
    <div className={styles.post_topics}>
      {props.post.topic.map((topic) => (
        <Btn02>{topic}</Btn02>
      ))}
    </div>
  );

  const concepts = (
    <div className={styles.post_concepts}>
      {props.post.concepts.map((concept) => (
        <Btn03>{concept}</Btn03>
      ))}
    </div>
  );

  const date = {
    month: props.post.date.toLocaleString("en-US", { month: "long" }),
    day: props.post.date.toLocaleString("en-US", { day: "2-digit" }),
    year: props.post.date.getFullYear(),
  };

  return (
    <React.Fragment>
      <div className={styles.post_card}>
        <div className={styles.post_header}>
          <h4 className={styles.post_title}>{props.post.name}</h4>
        </div>
        <div className={styles.post_details}>
          <div className={styles.post_tags}>
            {topics}
            {concepts}
          </div>
          <div className={styles.post_public}>
            <div className={styles.post_author}>
              <p className={styles.author_name}>{props.post.author}</p>
            </div>
            <div className={styles.post_date}>
              <p className={styles.date}>
                {`${date.day} ${date.month} ${date.year}`}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {content}
          <Btn02 onClick={toggleShowHandler}>{showBtnContent}</Btn02>
        </div>
        <div className={styles.post_ratings}>
          <div className={styles.ratings_section}>
            <div className={styles.post_stats}>
              <i
                className={likeClasses}
                onClick={() => opinionHandler("like")}
              ></i>
              {props.post.likes}
            </div>
            <div className={styles.post_stats}>
              <i
                className={dislikeClasses}
                onClick={() => opinionHandler("dislike")}
              ></i>
              {props.post.dislikes}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostCard;
