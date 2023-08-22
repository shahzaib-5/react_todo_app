import React from "react";
import AddTaskFrom from "./components/AddTaskFrom";
import UpdateTaskForm from "./components/UpdateTaskForm";
import ToDoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToDoProvider } from "./ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <div className="container App">
        <br />
        <br />
        <h2>To Do List App</h2>
        <UpdateTaskForm />
        <AddTaskFrom />
        <ToDoList />
      </div>
    </ToDoProvider>
  );
}

export default App;
