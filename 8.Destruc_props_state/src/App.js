import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Hello from "./components/Hello";
import ClassCom from "./components/ClassCom";

function App() {
  return (
    <div className="App">
      <Hello name="Vimaljeet" heroName="Depp" />
      <ClassCom name="Vimaljeet" heroName="Depp" />
    </div>
  );
}

export default App;
