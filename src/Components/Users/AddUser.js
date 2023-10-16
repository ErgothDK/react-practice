import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

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
    if (!userInput.username.trim() || !userInput.age.trim()) {
      setShowModal(true);
      setErrorMessage(
        "Please enter a valid Username and Age (Non empty string)"
      );
      return;
    } else if (+userInput.age <= 0) {
      setShowModal(true);
      setErrorMessage("Please enter a valid Age (greater than zero)");
      return;
    }

    props.onAddUser(userInput);
    setUserInput({
      username: "",
      age: "",
    });
  }

  function txtInputChangeHandler(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  return (
    <Card className={styles.input}>
      {showModal && showErrorModal}
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={txtInputChangeHandler}
            value={userInput.username}
            name="username"
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            onChange={txtInputChangeHandler}
            value={userInput.age}
            name="age"
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
