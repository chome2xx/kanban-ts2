import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer__root}>
      <small className={styles.footer__copyright}>
        &copy; Copyright 2021 xxxxxxx All Rights Reserved.
      </small>
    </div>
  );
};

export default Footer;
