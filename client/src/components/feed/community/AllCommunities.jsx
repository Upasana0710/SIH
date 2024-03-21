import React, { useEffect, useState } from "react";
import { getCommunities } from "../../../api/api";

import styles from "./AllCommunities.module.css";

const AllCommunities = () => {
  return (
    <div>
      <ul className={styles.communities_list}></ul>
    </div>
  );
};

export default AllCommunities;
