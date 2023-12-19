import React from "react";

import styles from "./TrendingPosts.module.css";
import Post from "./Post";

const TrendingPosts = () => {
  const trending_posts = [
    {
      name: "BFS, DFS easy and intuitive explanation 🔥🔥",
      topic: "DSA",
      id: "1",
    },
    {
      name: "🤖 All about Transistor and Biasing ⚡",
      topic: "Analog Electronics",
      id: "2",
    },
    {
      name: "Complete guide to Inheritance in C++",
      topic: "OOP",
      id: "3",
    },
    {
      name: "Beginner's Intro to Graphs",
      topic: "DSA",
      id: "4",
    },
    {
      name: "[EASY EXPLANATION] Normalization in DBMS",
      topic: "DBMS",
      id: "5",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.trending_container}>
        <div className={styles.trending_header}>
          <h3 className={styles.header}>
            Trending <span className={styles.emoji}>📈</span>
          </h3>
        </div>
        <div className={styles.trending_posts}>
          <ul className={styles.trending_list}>
            {trending_posts.map((post) => (
              <Post
                key={post.id}
                name={post.name}
                topic={post.topic}
                id={post.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrendingPosts;
