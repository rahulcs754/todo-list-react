import "./styles.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
  rootElement
);
