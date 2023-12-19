import React from "react";
import NavbarBtn from "../../../ui/NavbarBtn";

import styles from "./LoginButton.module.css";

const LoginButton = (props) => {
  const iconClasses = "fa-regular fa-user fa-xl";

  return (
    <NavbarBtn onTouch={props.onOpenModal}>
      <i className={iconClasses}></i>
    </NavbarBtn>
  );
};

export default LoginButton;
