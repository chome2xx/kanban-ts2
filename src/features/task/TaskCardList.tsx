import { Typography } from "@material-ui/core";
import React from "react";
import TaskCard from "./TaskCard";
import styles from "./TaskCardList.module.scss";

interface PropType {
  progress: string;
}

const TaskCardList: React.FC<PropType> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <Typography className={styles.progress_name} variant="h3">
          {props.progress}
        </Typography>
      </div>
      <div className={styles.taskCards}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskCardList;
