import React from "react";

import styles from "./Actions.module.css";
import Action from "./Action";

const Actions = () => {
  const actions = [
    { name: "Create a Topic", id: "action1", path: "/home" },
    { name: "Your Posts", id: "action2", path: "/home" },
    { name: "Groups", id: "action3", path: "/home" },
    { name: "Join a Room", id: "action4", path: "/home/lobby" },
    { name: "Saved Posts", id: "action5", path: "/home" },
    { name: "Downloads", id: "action6", path: "/home" },
  ];

  return (
    <React.Fragment>
      <div className={styles.actions_section}>
        <ul className={styles.actions_list}>
          {actions.map((action) => [
            <Action name={action.name} key={action.id} path={action.path}>
              {action.name}
            </Action>,
          ])}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Actions;
