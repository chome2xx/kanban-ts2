import React from "react";
import styles from "./Kanban.module.scss";
import TaskCardList from "../task/TaskCardList";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { useEffect } from "react";
import { TypeDocument } from "../../interface/Types";
import { viewAllTasks } from "../../features/task/taskSlice";

const Kanban: React.FC = () => {
  const dispatch = useDispatch();
  const project_id = "test";

  useEffect(() => {
    const unSub = db
      .collection("project")
      .doc(project_id)
      .collection("tasks")
      .onSnapshot((snapshot) => {
        const fireStore: TypeDocument[] = [];
        snapshot.docs.map((doc) =>
          fireStore.push({
            id: doc.id,
            task: {
              title: doc.data().title,
              memo: doc.data().memo,
              dueDate: doc.data().dueDate,
              priority: doc.data().priority,
              estimation: doc.data().estimation,
              actualTime: doc.data().actualTime,
              phase: doc.data().phase,
              completed: doc.data().completed,
              update: doc.data().update,
              uid: doc.data().uid,
            },
          })
        );
        // console.log(fireStore);
        dispatch(viewAllTasks(fireStore));
      });
    return () => unSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
