import { Typography } from "@material-ui/core";
import React from "react";
import ComplexCard from "./ComplexCard";
import styles from "./TaskCardList.module.scss";
import { selectTask } from "./taskSlice";
import { selectSearchTitle } from "../Header/searchSlice";
import { useSelector } from "react-redux";

interface PropType {
  progress: string;
}

const TaskCardList: React.FC<PropType> = (props) => {
  const tasks = useSelector(selectTask);
  const searchTitle = useSelector(selectSearchTitle);

  // Filter data by phase
  const filteredtasks = tasks.filter((doc) => {
    return (
      doc.task.phase === props.progress &&
      doc.task.title.indexOf(searchTitle) > -1
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <Typography className={styles.progress_name} variant="h3">
          {props.progress}
        </Typography>
      </div>
      <div className={styles.taskCards}>
        {filteredtasks.map((doc) => {
          return <ComplexCard key={doc.id} id={doc.id} task={doc.task} />;
        })}
      </div>
    </div>
  );
};

export default TaskCardList;
