import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import "./index.css";

function App() {
  const [userList, setUserList] = useState([]);

  function addUserHandler(userInput) {
    setUserList((userList) => {
      return [...userList, { ...userInput, id: Math.random().toString() }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {userList.length > 0 && <UserList userList={userList} />}
    </div>
  );
}

export default App;
