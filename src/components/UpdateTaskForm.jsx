import React from "react";
import { useToDoContext } from "../ToDoContext";

const UpdateTaskForm = () => {
  const { updateData, setUpdateData, updateTask } = useToDoContext();

  const handleChange = (e) => {
    setUpdateData({ ...updateData, title: e.target.value });
  };

  if (!updateData) {
    return null; // If updateData is not set, don't render anything (hide the input field)
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData.title}
            onChange={handleChange}
            className="form-control form-control-lg"
          />
        </div>

        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20" onClick={updateTask}>
            Update Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateTaskForm;
