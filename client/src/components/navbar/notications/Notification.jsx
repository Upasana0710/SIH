import React from "react";
import NavbarBtn from "../../../ui/NavbarBtn";

const Notification = () => {
  const iconClasses = "fa-regular fa-square-plus fa-xl";

  return (
    <NavbarBtn>
      <i className={iconClasses}></i>
    </NavbarBtn>
  );
};

export default Notification;
