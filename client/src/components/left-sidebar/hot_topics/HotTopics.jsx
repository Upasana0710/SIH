import React from "react";
import { Link } from "react-router-dom";

import styles from "./HotTopics.module.css";
import TopicBtn from "./TopicBtn";

const HotTopics = () => {
  const topic_list = [
    { name: "Digital Electronics", id: "#topic1" },
    { name: "DSA", id: "#topic2" },
    { name: "Math - III", id: "#topic3" },
    { name: "DBMS", id: "#topic4" },
    { name: "MMI", id: "#topic5" },
    { name: "OOP", id: "#topic6" },
    { name: "Analog Elctronics", id: "#topic7" },
    { name: "Programming in C", id: "#topic8" },
    { name: "Signals & Networks", id: "#topic9" },
    { name: "VLSI Design", id: "#topic10" },
    { name: "Instrumentation", id: "#topic11" },
    { name: "Cryptography", id: "#topic12" },
  ];

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.topics_header}>
          <Link to="/topic/hot-topics">
            <h3 className={styles.header}>
              Hot Topics <span className={styles.emoji}>🔥</span>
            </h3>
          </Link>
        </div>
        <div className={styles.topics_container}>
          {topic_list.map((topic) => (
            <TopicBtn key={topic.id} name={topic.name} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HotTopics;
