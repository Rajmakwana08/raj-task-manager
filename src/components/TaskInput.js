import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import "./TaskInput.css";

const TaskInput = () => {
  const [taskText, setTaskText] = useState(""); // Local state for task input
  const dispatch = useDispatch(); // To dispatch actions to Redux store

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText)); // Dispatch the add task action
      setTaskText(""); // Clear input field
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        className="task-input"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
