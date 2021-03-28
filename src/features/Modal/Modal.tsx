import React from "react";
import styles from "./Modal.module.scss";
import { useDispatch } from "react-redux";
import { close } from "../Modal/modalSlice";

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div id={styles.modal__overlay}></div>
      <div id={styles.modal__root}>
        <button onClick={() => dispatch(close())}>test</button>
      </div>
    </>
  );
};

export default Modal;
