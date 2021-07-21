import React from "react";
import './App.css';
import CountdownTimer from "./components/CountdownTimer";
import Headers from "./components/Header";
import Users from "./components/Users";
import UsersAgGrid from "./components/UsersAgGrid";


function App() {
  return (
    <div className="App">

      <Headers />
      <div className="parentDiv">
        <div class="ct">
          <CountdownTimer />
        </div>
        <div className="usr">
          <Users />
        </div>
      </div>
      <div className="agUsers">
        <UsersAgGrid />
        </div>
    </div>
  );
}

export default App;
