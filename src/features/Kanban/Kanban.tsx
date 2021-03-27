import React from "react";
import styles from "./Kanban.module.scss";
import Button from "@material-ui/core/Button";

const Kanban: React.FC = () => {
  return (
    <div className={styles.kanban_root}>
      <Button variant="contained" color="primary" className={styles.create}>
        Create
      </Button>
    </div>
  );
};

export default Kanban;
