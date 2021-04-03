import styles from "./Header.module.scss";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { create } from "../Modal/modalSlice";
import { setSearchTitle } from "../Header/searchSlice";
import { auth } from "../../firebase";
import { withRouter } from "react-router";
// import img from "../../media/IMG_0760.jpg";

const Header: React.FC = (props: any) => {
  const dispatch = useDispatch();

  // const logout = async () => {
  //   try {
  //     await auth.signOut();
  //     props.history.push("login");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <div className={styles.header__root}>
      <div className={styles.header__logo}>
        <h1>Kanban</h1>
      </div>
      <div>
        <Button
          onClick={() => dispatch(create(""))}
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
        {/* <img src={img} className={styles.icon} alt="" /> */}
        <ExitToAppIcon
          onClick={() => {
            auth
              .signOut()
              .then(function (firebaseUser) {
                props.history.push("login");
                console.log("Signed out");
              })
              .catch(function (error) {
                console.log(error.message);
              });
          }}
          className={styles.header__logout}
        />
      </div>
    </div>
  );
};

export default withRouter(Header);

// export default Header;
