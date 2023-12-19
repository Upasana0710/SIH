import React from "react";

import styles from "./Sidebar.module.css";
import Actions from "./sidebar_actions/Actions";
import Break from "../../ui/Break";
import Communities from "./sidebar_communities/Communities";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className={styles.sidebar}>
        <Actions />
        <Break />
        <Communities />
        <Break />
        <div className={styles.sidebar_footer}>
          <p className={styles.text}>
            Made with <span className={styles.emoji}>❤️</span> by Team LET
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
