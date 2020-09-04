import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import FunCom from './components/FunCom';
import Welcome from "./components/ClassCom";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      {/*<FunCom/>*/}
      {/*<Welcome/>*/}
      <Hello name="Vaishali" heroName="Virat">
        <p>This is children props</p>
      </Hello>
      <Hello name="Yash" heroName="Sonam">
        <button>Action</button>
      </Hello>
      <Welcome name="Vaishali" heroName="Virat" />
      <Welcome name="Yash" heroName="Sonam" />
      <Welcome name="Vimaljeet" heroName="Depp" />
    </div>
  );
}

export default App;
