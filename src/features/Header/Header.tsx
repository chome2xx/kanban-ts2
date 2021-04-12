import styles from "./Header.module.scss";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { create } from "../Modal/modalSlice";
import { setSearchTitle } from "../Header/searchSlice";
import { setProject } from "../Header/projectSlice";
import { useSelector } from "react-redux";
import { selectProject } from "../Header/projectSlice";
import { auth } from "../../firebase";
import { withRouter } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import img from "../../media/IMG_0760.jpg";

const Header: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const projectState = useSelector(selectProject);

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
      <div>
        <FormControl className={styles.project}>
          <InputLabel id="demo-simple-select-label">Project</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={projectState.name}
            onChange={(e) => {
              dispatch(setProject(e.target.value as string));
            }}
          >
            <MenuItem value={"Test"}>Test</MenuItem>
            <MenuItem value={"Production"}>Production</MenuItem>
          </Select>
        </FormControl>
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
