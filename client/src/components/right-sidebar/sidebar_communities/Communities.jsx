import React from "react";

import styles from "./Communities.module.css";
import Community from "./Community";
import Button from "../../../ui/Btn_01";

const Communities = () => {
  const Communities = [
    { name: "DSA Grinders", id: "comm1" },
    { name: "Objective OOP", id: "comm2" },
    { name: "Embedded Systems 🔥🛠️", id: "comm3" },
    { name: "DBMS A-Z", id: "comm4" },
    { name: "Maths for Freshers", id: "comm5" },
    { name: "For the love of Physics ❤️", id: "comm6" },
    { name: "Digital Electronics", id: "comm7" },
    { name: "Neural Networks for all 🤖", id: "comm8" },
    { name: "Neural Networks for all 🤖", id: "comm9" },
    { name: "Neural Networks for all 🤖", id: "comm10" },
    { name: "Neural Networks for all 🤖", id: "comm11" },
  ];

  return (
    <React.Fragment>
      <div className={styles.comm_section}>
        <ul className={styles.comm_list}>
          {Communities.map((action) => [
            <Community name={action.name} key={action.id}>
              {action.name}
            </Community>,
          ])}
        </ul>

        <div className={styles.more_btn}>
          <Button>+ More</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Communities;
