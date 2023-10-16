import React from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = () => {
  function submitFormHandler() {}
  function txtUsernameChangeHandler(e) {}
  function txtAgeChangeHandler(e) {}

  return (
    <Card className={styles.input}>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Username</label>
          <input type="text" onChange={txtUsernameChangeHandler} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" onChange={txtAgeChangeHandler} />
        </div>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
