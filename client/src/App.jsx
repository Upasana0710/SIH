import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Section1 from "./components/Section1.jsx";
import Section3 from "./components/Section3.jsx";
import ContactUs from "./components/Footer.jsx";
import LoginSignUp from "./components/login.jsx";
import Info from "./components/Info/info.jsx";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Schedule from "./components/ScheduleGenerate/Schedule.jsx";
import Newslet from "./components/Newslet/Newslet.jsx";
// import Home from "./components/Home.jsx";

import FeedPost from "./components/feed/feed_posts/post_cards/FeedPost";
import Hot from "./components/feed/hot/Hot";
import Latest from "./components/feed/latest/Latest";
import CommunityPage from "./components/feed/community/CommunityPage";
import Discover from "./components/feed/discover/Discover";
import ProfilePage from "./components/profile/ProfilePage.jsx";

import TopicFeed from "./components/Topics/topics_list/TopicFeed";
// import TopicDetails from "./components/Topics/topic_details/TopicDetails.jsx";
import HotTopicsList from "./components/Topics/topics_list/HotTopicsList";
import AllTopics from "./components/Topics/topics_list/AllTopics";

import Lobby from "./screens/Lobby.jsx";
import Room from "./screens/Room.jsx";

import Root from "./routes/Root";
// import Error from "./routes/Error.jsx";
import Home from "./routes/Home";
import Topic from "./routes/Topic";
import Landing from "./components/Landing.jsx";
import Review from "./screens/Review.jsx";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="" element={<Section1 />} />
            <Route path="/learn" element={<Carousel />} />
            <Route path="/about" element={<Section3 />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Route>

          {currentUser && (
            <>
              <Route path="/info" element={<Info />} />
              <Route path="/newslet" element={<Newslet />} />
              <Route path="/home" element={<Root />}>
                <Route path="" element={<Home />}>
                  <Route path="" element={<FeedPost />} />
                </Route>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="lobby" element={<Lobby />} />
              </Route>
              <Route path="/home/latest" element={<Latest />} />
              <Route path="/home/hot" element={<Hot />} />
              <Route path="/home/discover" element={<Discover />} />
              <Route path="/home/communities" element={<CommunityPage />} />
              <Route path="/home/profile" element={<ProfilePage />} />

              <Route path="/room/:roomId" element={<Room />} />
              <Route path="/room/review" element={<Review />} />

              <Route path="/topic" element={<Topic />}>
                <Route path="" element={<TopicFeed />} />
                {/* <Route path=":topicId" element={<TopicDetails />} /> */}
              </Route>
              <Route path="/topic/hot-topics" element={<HotTopicsList />} />
              <Route path="/topic/all-topics" element={<AllTopics />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
