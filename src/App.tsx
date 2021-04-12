import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Kanban from "./features/Kanban/Kanban";
import Modal from "./features/Modal/Modal";
import { selectModalState } from "./features/Modal/modalSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";

const App: React.FC = (props: any) => {
  const modalState = useSelector(selectModalState);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        props.history.push("/login");
      }
    });
    return () => unSub();
  });

  if (isLoggedin) {
    return (
      <div>
        <Header />
        <Kanban />
        {modalState.isModalOpen && <Modal />}
        <Footer />
      </div>
    );
  } else {
    return <div>Not authorized</div>;
  }
};

export default App;
