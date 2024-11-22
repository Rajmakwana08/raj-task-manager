import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list-container">
      <h1 className="task-list-title">Your Tasks</h1>
      {tasks && tasks.length > 0 ? (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p className="no-tasks-message">No tasks available. Add some!</p>
      )}
    </div>
  );
};

export default TaskList;
