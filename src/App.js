import React from "react";
import Card from "./UI/Card";
import AddUser from "./Components/Users/AddUser";
import "./index.css";

function App() {
  return (
    <div>
      <Card>
        <AddUser />
      </Card>

      <div>
        <ul>
          <li>Max (31 years old)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
