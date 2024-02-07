import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { getUser, getUserByToken } from "../../api/api";

import ProfileCard from "./ProfileCard/ProfileCard";

import UserPost from "./PostCard/PostCard";
import NewPost from "./NewPost/NewPost";

import Sidebar from "../right-sidebar/Sidebar";

import "./ProfilePage.css";


const data1 = [
  {
    profilephoto: "profilephoto.png",
    postname: "Upasana",
    post: `
    Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n
    
    BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n
    
    On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n
    
    \n`,
    likes: 2873,
    dislikes: 431,
  },

  {
    postname: "Upasana",
    post: `
    A greedy algorithm is a strategy that makes the best choice at each step, with the goal of finding a globally optimal solution. This means the algorithm picks the best solution at the moment without regard for consequences.\n
    
    \n`,
    likes: 2873,
    dislikes: 431,
  },
  {
    postname: "Upasana",
    post: `
    An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array)..\n
    
   \n`,
    likes: 2873,
    dislikes: 431,
  },
  {
    postname: "Upasana",
    post: `
    Breadth-First Search (BFS) and Depth-First Search (DFS) are fundamental algorithms used to explore and traverse graphs, a type of data structure that consists of nodes interconnected by edges. These algorithms play a crucial role in various computer science applications, from pathfinding in maps to solving puzzles and analyzing social networks.\n
    
    BFS is a graph traversal algorithm that starts at a chosen node, explores all its neighbors first, and then systematically moves on to their neighbors, covering the graph layer by layer. It employs a queue data structure to keep track of the nodes to be visited. BFS is particularly useful for finding the shortest path between nodes in unweighted graphs, as it guarantees the shortest path by traversing levels of the graph incrementally.\n
    
    On the other hand, DFS is another traversal algorithm that starts at a node and explores as far as possible along each branch before backtracking. It employs a stack or recursion to maintain the traversal order. DFS is valuable for tasks like topological sorting, where the order of dependency matters, and it can also be used to detect cycles in a graph. However, DFS does not guarantee the shortest path as BFS does, making it less suitable for shortest path problems.\n
    
   \n`,
    likes: 2873,
    dislikes: 431,
  },
];
let userDetails;
let user_posts;


function ProfilePage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [myUser, setMyUser] = useState(false);
  const [hasUserdetails,setHasuserDetails]=useState(false);

  const userId = params.get("uid");

 

  useEffect(() => {
    async function fetchUser() {
      console.log(userId);
      try {
        if (userId) {
          setMyUser(false);
          const response = await getUser(userId);
          userDetails = response.data;
          setHasuserDetails(true);
          console.log(userDetails);
        } else {
          setMyUser(true);
          const response = await getUserByToken(
            localStorage.getItem("user_info")
          );
          userDetails = response.data;
          setHasuserDetails(true);
          console.log(userDetails);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [userId]);

    

    user_posts=data1.map((item)=>
    <UserPost 
    title={item.postname}
    text={item.post}/>)
  return (
    <div className="profile-height">
      <Sidebar />

      <section className="profile_container_section">
        
        { hasUserdetails && <ProfileCard user={userDetails}/> }
        {userId && (
          <div className="redirect_container">
            <button type="button" className="redirect_slot_booking_button">
              <Link to="/home/slot" className="redirect_link_slot">
                GO TO SLOT BOOKING
              </Link>
            </button>
          </div>
        )}

        <NewPost />
        {user_posts}
      </section>
     
    </div>
  );
}

export default ProfilePage;
