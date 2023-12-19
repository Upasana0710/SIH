import React from "react";

import styles from "./Actions.module.css";
import Action from "./Action";

const Actions = () => {
  const actions = [
    { name: "Create a Topic", id: "action1" },
    { name: "Your Posts", id: "action2" },
    { name: "Groups", id: "action3" },
    { name: "Your Activity", id: "action4" },
    { name: "Saved Posts", id: "action5" },
    { name: "Downloads", id: "action6" },
  ];

  return (
    <React.Fragment>
      <div className={styles.actions_section}>
        <ul className={styles.actions_list}>
          {actions.map((action) => [
            <Action name={action.name} key={action.id}>
              {action.name}
            </Action>,
          ])}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Actions;
