import React from "react";

import styles from "./FeedPost.module.css";
import PostCard from "./PostCard";

const FeedPost = () => {
  const feed_posts = [
    {
      name: "Exploring Data Structures and Algorithms 🔥🔥",
      topic: ["DSA"],
      concepts: ["Arrays", "Linked Lists", "Recursion"],
      author: "codingMaster42",
      date: new Date("2023-04-10T09:30:00Z"),
      likes: 15,
      dislikes: 2,
      content:
        "Just dived into the world of Data Structures and Algorithms! 🚀 Today, I explored arrays, linked lists, and recursion. The journey has just begun! #coding #DSA. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lacinia iaculis. Nulla scelerisque venenatis dolor sit amet rhoncus. Aenean ut aliquam lorem. Praesent tempor varius pretium. Pellentesque fermentum a massa eget eleifend. Praesent feugiat tellus quis ante commodo, quis suscipit sem bibendum. Nullam eu faucibus velit. Quisque in est pretium, aliquam eros quis, mattis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ultrices augue, eget pellentesque purus. Praesent purus tellus, aliquet at aliquam quis, laoreet a nunc. Phasellus sed consectetur velit. Aliquam gravida, ex sit amet congue ullamcorper, dui ex sodales augue, eget gravida nibh metus.",
    },
    {
      name: "Database Management Demystified",
      topic: ["DBMS"],
      concepts: ["Normalization", "SQL Queries", "Indexes"],
      author: "dataExplorer",
      date: new Date("2023-04-11T14:45:00Z"),
      likes: 20,
      dislikes: 1,
      content:
        "📊 Delving into the world of Database Management Systems! Explored normalization, wrote complex SQL queries, and learned about the magic of indexes. Feeling like a DBMS wizard! 🔍 #DBMS #SQL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lacinia iaculis. Nulla scelerisque venenatis dolor sit amet rhoncus. Aenean ut aliquam lorem. Praesent tempor varius pretium. Pellentesque fermentum a massa eget eleifend. Praesent feugiat tellus quis ante commodo, quis suscipit sem bibendum. Nullam eu faucibus velit. Quisque in est pretium, aliquam eros quis, mattis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ultrices augue, eget pellentesque purus. Praesent purus tellus, aliquet at aliquam quis, laoreet a nunc. Phasellus sed consectetur velit. Aliquam gravida, ex sit amet congue ullamcorper, dui ex sodales augue, eget gravida nibh metus.",
    },
    {
      name: "Understanding Computer Networks Basics",
      topic: ["CN"],
      concepts: ["TCP/IP", "Routing", "Subnetting"],
      author: "networkNinja",
      date: new Date("2023-04-12T11:15:00Z"),
      likes: 18,
      dislikes: 3,
      content:
        "🌐 Today's journey: Computer Networks! Explored TCP/IP, routing strategies, and even tried my hand at subnetting. Networking is fascinating! 💻 #ComputerNetworks #Networking. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lacinia iaculis. Nulla scelerisque venenatis dolor sit amet rhoncus. Aenean ut aliquam lorem. Praesent tempor varius pretium. Pellentesque fermentum a massa eget eleifend. Praesent feugiat tellus quis ante commodo, quis suscipit sem bibendum. Nullam eu faucibus velit. Quisque in est pretium, aliquam eros quis, mattis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ultrices augue, eget pellentesque purus. Praesent purus tellus, aliquet at aliquam quis, laoreet a nunc. Phasellus sed consectetur velit. Aliquam gravida, ex sit amet congue ullamcorper, dui ex sodales augue, eget gravida nibh metus.",
    },
    {
      name: "Mastering Graph Theory",
      topic: ["DSA"],
      concepts: ["Graphs", "DFS", "BFS"],
      author: "graphGeek",
      date: new Date("2023-04-13T13:20:00Z"),
      likes: 25,
      dislikes: 0,
      content:
        "📈 Diving deep into Graph Theory! Explored graphs, implemented DFS and BFS algorithms. Graphs are not just nodes and edges; they're a fascinating world of connections! #GraphTheory #Algorithms. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lacinia iaculis. Nulla scelerisque venenatis dolor sit amet rhoncus. Aenean ut aliquam lorem. Praesent tempor varius pretium. Pellentesque fermentum a massa eget eleifend. Praesent feugiat tellus quis ante commodo, quis suscipit sem bibendum. Nullam eu faucibus velit. Quisque in est pretium, aliquam eros quis, mattis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ultrices augue, eget pellentesque purus. Praesent purus tellus, aliquet at aliquam quis, laoreet a nunc. Phasellus sed consectetur velit. Aliquam gravida, ex sit amet congue ullamcorper, dui ex sodales augue, eget gravida nibh metus.",
    },
    {
      name: "Introduction to Relational Databases",
      topic: ["DBMS"],
      concepts: ["Relational Model", "Entity-Relationship Diagrams", "SQL"],
      author: "dataEnthusiast",
      date: new Date("2023-04-14T10:00:00Z"),
      likes: 22,
      dislikes: 1,
      content:
        "🗃️ Let's talk about Relational Databases! Explored the relational model, created Entity-Relationship Diagrams, and wrote SQL queries. The power of organizing data! #RelationalDatabases #SQL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lacinia iaculis. Nulla scelerisque venenatis dolor sit amet rhoncus. Aenean ut aliquam lorem. Praesent tempor varius pretium. Pellentesque fermentum a massa eget eleifend. Praesent feugiat tellus quis ante commodo, quis suscipit sem bibendum. Nullam eu faucibus velit. Quisque in est pretium, aliquam eros quis, mattis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ultrices augue, eget pellentesque purus. Praesent purus tellus, aliquet at aliquam quis, laoreet a nunc. Phasellus sed consectetur velit. Aliquam gravida, ex sit amet congue ullamcorper, dui ex sodales augue, eget gravida nibh metus.",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.feed_posts_container}>
        {feed_posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default FeedPost;
