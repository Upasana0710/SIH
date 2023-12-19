import React from "react";

import styles from "./Action.module.css";

const Action = (props) => {
  return (
    <React.Fragment>
      <li className={styles.action_list}>{props.children}</li>
    </React.Fragment>
  );
};

export default Action;
