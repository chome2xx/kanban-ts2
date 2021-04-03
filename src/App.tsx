import "./App.css";
import { db } from "./firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewAllTasks } from "./features/task/taskSlice";
import React from "react";
import { TypeDocument } from "./interface/Types";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import Kanban from "./features/Kanban/Kanban";
import Modal from "./features/Modal/Modal";
import { selectModalState } from "./features/Modal/modalSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

const App: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const modalState = useSelector(selectModalState);

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      !user && props.history.push("/login");
    });
    return () => unSub();
  });

  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
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
    <div>
      <Header />
      {modalState.isModalOpen && <Modal />}
      <Kanban />
      <Footer />
    </div>
  );
};

export default App;
