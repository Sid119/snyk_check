import React from "react";
import styles from "./login.part.module.scss";

const NavbarLoginComponent: React.FC = () => {
  return (
    <div className={styles.navbarLogin}>
      <div className="flex gap-3 align-bottom items-center">
        <img
          src="/assets/cloudeqImage.svg"
          width={"120.51px"}
          height={"24px"}
          alt="cloudeqImage"
        />
        <span className={styles.seperator}></span>
        <span className={styles.heading}>CMS</span>
      </div>
    </div>
  );
};

export default NavbarLoginComponent;
