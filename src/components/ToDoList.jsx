// ToDoList.js

import React from "react";
import { useToDoContext } from "../ToDoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDoList = () => {
  const { toDo, setUpdateData, confirmDeleteTask } = useToDoContext();

  return (
    <>
      {toDo.map((task, index) => {
        return (
          <React.Fragment key={task.id}>
            <div className="col tasks">
              <span className="taskNumber">{index + 1}</span>
              <span className="tasktext">{task.title}</span>

              <div className="iconsWrap">
                <span
                  title="Edit"
                  onClick={() => setUpdateData({ id: task.id, title: task.title })}
                >
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span title="Remove" onClick={() => confirmDeleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <br />
      <br />
    </>
  );
};

export default ToDoList;
