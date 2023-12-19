import React from "react";

import styles from "./Community.module.css";

const Community = (props) => {
  return (
    <React.Fragment>
      <li className={styles.comm_list}>{props.children}</li>
    </React.Fragment>
  );
};

export default Community;
