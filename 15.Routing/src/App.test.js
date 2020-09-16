import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Users from "./components/Users";
import User from "./components/user";

test("Users is defined", () => {
  expect(Users()).toBeDefined();
});
