import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getUser } from "../../api/api";

import ProfileCard from "./ProfileCard/ProfileCard";
import profilephoto from "../../assets/profilephoto.png";
import UserPost from "./PostCard/PostCard";
import NewPost from "./NewPost/NewPost";

import Sidebar from "../right-sidebar/Sidebar";

import "./ProfilePage.css";

const data = [
  {
    profilephoto: "profilephoto.png",
    postname: "Username",
    post: `
    Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n
    
    BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n
    
    On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n
    
    \n`,
    likes: 2873,
    dislikes: 431,
  },

  {
    postname: "Username",
    post: `
    Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n
    
    BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n
    
    On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n
    
    \n`,
    likes: 2873,
    dislikes: 431,
  },
  {
    postname: "Username",
    post: `
    Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n
    
    BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n
    
    On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n
    
   \n`,
    likes: 2873,
    dislikes: 431,
  },
  {
    postname: "Name",
    post: `
    Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n
    
    BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n
    
    On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n
    
   \n`,
    likes: 2873,
    dislikes: 431,
  },
];

function ProfilePage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const userId = params.get("uid");

  useEffect(() => {
    async function fetchUser() {
      try {
        if (userId) {
          const response = await getUser(userId);
          userDetails = response.data;
          console.log(userDetails);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [userId]);

  let userDetails;

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
    <div className="profile-height">
      <Sidebar />

      <section className="profile_container_section">
        <ProfileCard
          profilephoto={profilephoto}
          name={userDetails.name}
          about="This is my about.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corporis neque illum eum omnis quis inventore iusto cupiditate? Reiciendis provident sed iste sapiente, necessitatibus nesciunt unde laudantium natus expedita pariatur!"
        />

        <NewPost />
        {posts}
      </section>
    </div>
  );
}

export default ProfilePage;
