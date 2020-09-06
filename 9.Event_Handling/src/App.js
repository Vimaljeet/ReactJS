import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Hello from "./components/Hello";
import ClassCom from "./components/ClassCom";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
