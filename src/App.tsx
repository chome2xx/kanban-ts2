import "./App.css";
import { db } from "./firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewAllTasks } from "./features/task/taskSlice";
import React from "react";
import { TypeTask } from "./interface/Types";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import Kanban from "./features/Kanban/Kanban";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      const fireStore: TypeTask[] = [];
      snapshot.docs.map((doc) =>
        fireStore.push({
          id: doc.id,
          title: doc.data().title,
          memo: doc.data().memo,
          dueDate: doc.data().dueDate,
          priority: doc.data().priority,
          estimation: doc.data().estimation,
          actualTime: doc.data().actualTime,
          status: doc.data().status,
          phase: doc.data().phase,
          completed: doc.data().completed,
        })
      );
      console.log(fireStore);
      dispatch(viewAllTasks(fireStore));
    });
    return () => unSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Kanban />
      <Footer />
    </div>
  );
};

export default App;
