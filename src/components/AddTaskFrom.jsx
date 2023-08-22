import React from "react";
import { useToDoContext } from "../ToDoContext";

const AddTaskFrom = () => {
  const { newTask, setNewTask, addTask } = useToDoContext();

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>

        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add New Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskFrom;
