import React, { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export function useToDoContext() {
  return useContext(ToDoContext);
}

export function ToDoProvider({ children }) {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState(null);

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTaskList = toDo.filter((task) => task.id !== id);
    setToDo(newTaskList);
  };

  const confirmDeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  const updateTask = () => {
    let updatedList = toDo.map((task) =>
      task.id === updateData.id ? updateData : task
    );
    setToDo(updatedList);
    setUpdateData(null);
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
    };
    setUpdateData(newEntry);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDo,
        newTask,
        updateData,
        setNewTask,
        setUpdateData,  
        addTask,
        deleteTask,
        updateTask,
        changeTask,
        confirmDeleteTask 
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
