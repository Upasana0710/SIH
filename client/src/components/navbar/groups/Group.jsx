import React from "react";
import NavbarBtn from "../../../ui/NavbarBtn";

import styles from "./Group.module.css";

const Group = () => {
  const iconClasses = "fa-solid fa-user-group";
  return (
    <NavbarBtn>
      <i class={iconClasses}></i>
    </NavbarBtn>
  );
};

export default Group;
