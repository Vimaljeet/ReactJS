import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Vimaljeet", "Shank", "Yash", "Vimaljeet"];
  const persons = [
    {
      id: 1,
      name: "Vimaljeet",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Shank",
      age: 25,
      skill: "Python",
    },
    {
      id: 3,
      name: "Yash",
      age: 35,
      skill: "Java",
    },
  ];
  const NameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{NameList}</div>;
}

export default NameList;
