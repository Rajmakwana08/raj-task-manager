import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Raj Task Manager</h1>
          <p className="app-subtitle">Organize your tasks with ease!</p>
        </header>
        <main className="app-main">
          <TaskInput />
          <TaskList />
        </main>
        <footer className="app-footer">
          <p>Made with ❤️ by Raj</p>
        </footer>
      </div>
    </Provider>
  );
};

export default App;
