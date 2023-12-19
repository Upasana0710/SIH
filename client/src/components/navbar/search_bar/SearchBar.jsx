import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <form className={styles.search_form}>
        <input
          type="text"
          placeholder="Search away..."
          className={styles.search_bar}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
