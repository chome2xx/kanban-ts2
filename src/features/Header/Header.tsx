import styles from "./Header.module.scss";
import React from "react";
import TextField from "@material-ui/core/TextField";

const Header: React.FC = () => {
  return (
    <div className={styles.header__root}>
      <div className={styles.header__logo}>
        <h1>Kanban</h1>
      </div>
      <div className={styles.header__filterArea}>
        <TextField
          className={styles.header__search}
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          size="small"
        />
        {/* <span className={styles.header__label}>Filter: </span>
        <input
          type="text"
          placeholder="Enter title"
          className={styles.header__filter}
        /> */}
      </div>
      <div className={styles.header__credential}></div>
    </div>
  );
};

export default Header;
