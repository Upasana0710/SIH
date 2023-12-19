import React from "react";

import styles from "./FeedPost.module.css";
import PostCard from "./PostCard";

const FeedPost = () => {
  const feed_posts = [
    {
      name: "BFS, DFS easy and intuitive explanation 🔥🔥",
      topic: ["DSA"],
      concepts: ["BFS", "DFS", "Trees", "Searching"],
      author: "xaliz-06",
      date: new Date(2022, 6, 18),
      likes: 2873,
      dislikes: 431,
      content: `
Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n

BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n

On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n

BFS and DFS have different strengths and are chosen based on the problem's requirements. BFS's systematic approach ensures it can find the shortest path efficiently, but it might consume more memory due to the need to maintain a queue. DFS, though memory-efficient, can get trapped in deep levels of a graph and might not yield optimal solutions. The choice between BFS and DFS depends on the problem's nature, the graph's structure, and the specific objectives.\n

In conclusion, BFS and DFS are powerful tools in graph traversal, offering different trade-offs in terms of memory usage and optimality of solutions. Understanding these algorithms provides a foundation for solving a wide range of problems in computer science and other fields involving interconnected data structures.\n`,
      id: "post#1",
    },
    {
      name: "BFS, DFS easy and intuitive explanation 🔥🔥",
      topic: ["DSA"],
      concepts: ["BFS", "DFS", "Trees", "Searching"],
      author: "xaliz-06",
      date: new Date(2022, 6, 18),
      likes: 2873,
      dislikes: 431,
      content: `
Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n

BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n

On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n

BFS and DFS have different strengths and are chosen based on the problem's requirements. BFS's systematic approach ensures it can find the shortest path efficiently, but it might consume more memory due to the need to maintain a queue. DFS, though memory-efficient, can get trapped in deep levels of a graph and might not yield optimal solutions. The choice between BFS and DFS depends on the problem's nature, the graph's structure, and the specific objectives.\n

In conclusion, BFS and DFS are powerful tools in graph traversal, offering different trade-offs in terms of memory usage and optimality of solutions. Understanding these algorithms provides a foundation for solving a wide range of problems in computer science and other fields involving interconnected data structures.\n`,
      id: "post#2",
    },
    {
      name: "BFS, DFS easy and intuitive explanation 🔥🔥",
      topic: ["DSA"],
      concepts: ["BFS", "DFS", "Trees", "Searching"],
      author: "xaliz-06",
      date: new Date(2022, 6, 18),
      likes: 2873,
      dislikes: 431,
      content: `
Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n

BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n

On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n

BFS and DFS have different strengths and are chosen based on the problem's requirements. BFS's systematic approach ensures it can find the shortest path efficiently, but it might consume more memory due to the need to maintain a queue. DFS, though memory-efficient, can get trapped in deep levels of a graph and might not yield optimal solutions. The choice between BFS and DFS depends on the problem's nature, the graph's structure, and the specific objectives.\n

In conclusion, BFS and DFS are powerful tools in graph traversal, offering different trade-offs in terms of memory usage and optimality of solutions. Understanding these algorithms provides a foundation for solving a wide range of problems in computer science and other fields involving interconnected data structures.\n`,
      id: "post#3",
    },
    {
      name: "BFS, DFS easy and intuitive explanation 🔥🔥",
      topic: ["DSA"],
      concepts: ["BFS", "DFS", "Trees", "Searching"],
      author: "xaliz-06",
      date: new Date(2022, 6, 18),
      likes: 2873,
      dislikes: 431,
      content: `
Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n

BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n

On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n

BFS and DFS have different strengths and are chosen based on the problem's requirements. BFS's systematic approach ensures it can find the shortest path efficiently, but it might consume more memory due to the need to maintain a queue. DFS, though memory-efficient, can get trapped in deep levels of a graph and might not yield optimal solutions. The choice between BFS and DFS depends on the problem's nature, the graph's structure, and the specific objectives.\n

In conclusion, BFS and DFS are powerful tools in graph traversal, offering different trade-offs in terms of memory usage and optimality of solutions. Understanding these algorithms provides a foundation for solving a wide range of problems in computer science and other fields involving interconnected data structures.\n`,
      id: "post#4",
    },
    {
      name: "BFS, DFS easy and intuitive explanation 🔥🔥",
      topic: ["DSA"],
      concepts: ["BFS", "DFS", "Trees", "Searching"],
      author: "xaliz-06",
      date: new Date(2022, 6, 18),
      likes: 2873,
      dislikes: 431,
      content: `
Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n

BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n

On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n

BFS and DFS have different strengths and are chosen based on the problem's requirements. BFS's systematic approach ensures it can find the shortest path efficiently, but it might consume more memory due to the need to maintain a queue. DFS, though memory-efficient, can get trapped in deep levels of a graph and might not yield optimal solutions. The choice between BFS and DFS depends on the problem's nature, the graph's structure, and the specific objectives.\n

In conclusion, BFS and DFS are powerful tools in graph traversal, offering different trade-offs in terms of memory usage and optimality of solutions. Understanding these algorithms provides a foundation for solving a wide range of problems in computer science and other fields involving interconnected data structures.\n`,
      id: "post#5",
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
