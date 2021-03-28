import { Typography } from "@material-ui/core";
import React from "react";
import ComplexCard from "./ComplexCard";
import styles from "./TaskCardList.module.scss";
import { selectTask } from "./taskSlice";
import { useSelector } from "react-redux";

interface PropType {
  progress: string;
}

const TaskCardList: React.FC<PropType> = (props) => {
  const tasks = useSelector(selectTask);

  // Filter data by phase
  const filteredtasks = tasks.filter((task) => {
    return task.phase === props.progress;
  });

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <Typography className={styles.progress_name} variant="h3">
          {props.progress}
        </Typography>
      </div>
      <div className={styles.taskCards}>
        {filteredtasks.map((task) => {
          return (
            <ComplexCard
              key={task.id}
              id={task.id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority}
              estimation={task.estimation}
              actualTime={task.actualTime}
              memo={task.memo}
              status={task.status}
              phase={task.phase}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskCardList;
