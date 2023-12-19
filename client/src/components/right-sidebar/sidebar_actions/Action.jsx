import React from "react";

import styles from "./Action.module.css";
import { NavLink } from "react-router-dom";

const Action = (props) => {
  return (
    <React.Fragment>
      <NavLink to={props.path} className={styles.action_list}>{props.children}</NavLink>
    </React.Fragment>
  );
};

export default Action;
