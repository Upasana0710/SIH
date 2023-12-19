import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/right-sidebar/Sidebar";

import Trending from "../components/left-sidebar/Trending";
import TabNav from "../components/nav/TabNav";

import styles from "./route-styles/Home.module.css";
import TopicsPage from "../components/Topics/TopicsPage";

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <TabNav />
      <Trending />
    </div>
  );
};

export default Home;
