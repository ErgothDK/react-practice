import React from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  function submitFormHandler() {}
  function txtUsernameChangeHandler(e) {}
  function txtAgeChangeHandler(e) {}

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          onChange={txtUsernameChangeHandler}
          className={styles.input}
        />
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          onChange={txtAgeChangeHandler}
          className={styles.input}
        />
      </div>
      <Button>Add User</Button>
    </form>
  );
};

export default AddUser;
