import React from "react";
import styles from "./Kanban.module.scss";
import TaskCardList from "../task/TaskCardList";

const Kanban: React.FC = () => {
  return (
    <div className={styles.kanban__root}>
      <TaskCardList progress="Backlog" />
      <TaskCardList progress="Scheduled" />
      <TaskCardList progress="In Progress" />
      <TaskCardList progress="Done" />
    </div>
  );
};

export default Kanban;
