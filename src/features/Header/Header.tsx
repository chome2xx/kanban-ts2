import styles from "./Header.module.scss";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header: React.FC = () => {
  return (
    <div className={styles.header__root}>
      <div className={styles.header__logo}>
        <h1>Kanban</h1>
      </div>
      <div>
        <Button variant="contained" color="primary" className={styles.create}>
          Create
        </Button>
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
      </div>
      <div className={styles.header__credential}>
        <ExitToAppIcon className={styles.header__logout} />
      </div>
    </div>
  );
};

export default Header;
