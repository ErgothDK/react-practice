import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onCloseModalHandler}></div>,
    document.getElementById("backdrop-root")
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Card className={styles.modal}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <div className={styles.actions}>
        <Button onClick={props.onCloseModalHandler}>Okay</Button>
      </div>
    </Card>,
    document.getElementById("overlay-root")
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onCloseModalHandler={props.onCloseModalHandler} />
      <Modal
        title={props.title}
        message={props.message}
        onCloseModalHandler={props.onCloseModalHandler}
      />
    </React.Fragment>
  );
};

export default ErrorModal;
