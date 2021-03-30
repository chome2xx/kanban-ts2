import styles from "./Header.module.scss";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { open } from "../Modal/modalSlice";
import { setSearchTitle } from "../Header/searchSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header__root}>
      <div className={styles.header__logo}>
        <h1>Kanban</h1>
      </div>
      <div>
        <Button
          onClick={() => dispatch(open())}
          variant="contained"
          color="primary"
          className={styles.create}
        >
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
          onChange={(e) => dispatch(setSearchTitle(e.target.value))}
        />
      </div>
      <div className={styles.header__credential}>
        <ExitToAppIcon className={styles.header__logout} />
      </div>
    </div>
  );
};

export default Header;
