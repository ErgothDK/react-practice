import React from "react";

function App() {
  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Username</label>
          <input type="text" onChange={txtUsernameChangeHandler} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" onChange={txtAgeChangeHandler} />
        </div>
        <button type="submit">Add User</button>
      </form>
      <div>
        <ul>
          <li>Max (31 years old)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
