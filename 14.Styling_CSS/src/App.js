import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import EventBind from "./components/EventBind";
//import ParentComponent from "./components/ParentComponent";
//import UserGreeting from "./components/UserGreeting";
//import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true} />
    </div>
  );
}

export default App;
