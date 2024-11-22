import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../redux/actions";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <span
        className={`task-text ${task.completed ? "completed" : ""}`}
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.text}
      </span>
      <button
        className="remove-button"
        onClick={() => dispatch(removeTask(task.id))}
      >
        ✖
      </button>
    </div>
  );
};

export default TaskItem;
