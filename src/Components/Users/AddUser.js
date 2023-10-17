import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function closeModalHandler(e) {
    setShowModal(false);
    setErrorMessage("");
  }

  const showErrorModal = (
    <ErrorModal
      title="Invalid Input"
      message={errorMessage}
      onCloseModalHandler={closeModalHandler}
    />
  );

  function submitFormHandler(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    if (!username.trim() || !age.trim()) {
      setShowModal(true);
      setErrorMessage(
        "Please enter a valid Username and Age (Non empty string)"
      );
      return;
    } else if (+age <= 0) {
      setShowModal(true);
      setErrorMessage("Please enter a valid Age (greater than zero)");
      return;
    }

    props.onAddUser({ username, age });
  }

  return (
    <Wrapper>
      {showModal && showErrorModal}
      <Card className={styles.input}>
        <form onSubmit={submitFormHandler}>
          <div>
            <label>Username</label>
            <input type="text" name="username" ref={usernameRef} />
          </div>
          <div>
            <label>Age (Years)</label>
            <input type="number" name="age" ref={ageRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
