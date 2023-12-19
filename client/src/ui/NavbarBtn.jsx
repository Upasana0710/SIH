import React from "react";

import styles from "./NavbarBtn.module.css";

const Navbar_Btn = (props) => {
  return (
    <React.Fragment>
      <button className={styles.btn} onClick={props && props.onTouch}>
        <span className={styles.icon}>{props.children}</span>
      </button>
    </React.Fragment>
  );
};

export default Navbar_Btn;
