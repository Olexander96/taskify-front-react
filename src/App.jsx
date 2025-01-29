import React, { useState, useEffect } from 'react';
// Components
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import TaskFilter from './components/TaskFilter/TaskFilter';
//API Functions
import { getAllTasks } from './api/get-tasks.js';
import { addNewTask } from './api/add-task.js';
import { deleteTask } from './api/delete-task.js';
import { updateTask } from './api/update_task.js';
// Styles
import styles from './App.module.css';

// Server settings
const SERVER_URL = 'https://taskify-api-mq44.onrender.com';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // GET tasks from server in the start
  useEffect(() => {
    const CURRENT_SERVER_URL = `${SERVER_URL}/get-tasks`;
    getAllTasks(CURRENT_SERVER_URL).then((tasksData) => setTasks(tasksData));
  }, []);

  // POST new task to server
  const addTaskHandler = (taskTitle, taskText, status) => {
    const CURRENT_SERVER_URL = `${SERVER_URL}/add-task`;
    addNewTask(taskTitle, taskText, status, CURRENT_SERVER_URL)
      .then((addedTask) => {
        setTasks([...tasks, addedTask]);
      })
      .catch(() => {
        setTasks(tasks);
      });
  };
  // UPDATE task on server
  const updateTaskStatusHandler = (taskId, newStatus) => {
    const CURRENT_SERVER_URL = `${SERVER_URL}/update-task`;

    updateTask(taskId, newStatus, CURRENT_SERVER_URL)
      .then((updatedTaskObj) => {
        const currentUpdatedTaskObj = JSON.parse(updatedTaskObj);

        if (currentUpdatedTaskObj.taskId) {
          setTasks(
            tasks.map((task) =>
              task.task_id === currentUpdatedTaskObj.taskId
                ? { ...task, status: currentUpdatedTaskObj.taskStatus }
                : task
            )
          );
        } else {
          setTasks(tasks);
        }
      })
      .catch(() => {
        console.error('Can not update new task on server!');
        setTasks(tasks);
      });
  };

  // DELETE task from server
  const deleteTaskHandler = (taskId) => {
    const CURRENT_SERVER_URL = `${SERVER_URL}/delete-task`;
    deleteTask(taskId, CURRENT_SERVER_URL)
      .then((deletedTaskId) => {
        if (deletedTaskId === taskId) {
          setTasks(tasks.filter((task) => task.task_id !== deletedTaskId));
        } else {
          setTasks(tasks);
          console.error('Can not delete task from server!');
        }
      })
      .catch(() => {
        setTasks(tasks);
      });
  };

  let filteredTasks = [];
  if (tasks.length > 0) {
    filteredTasks = tasks.filter((task) => {
      if (filter === 'all') return true;
      if (filter === 'new') return task.status === 'new';
      if (filter === 'in_progress') return task.status === 'in_progress';
      if (filter === 'completed') return task.status === 'completed';
      return task.status === filter;
    });
  }

  return (
    <div className={styles.app}>
      <h1>Create New Task</h1>
      <TaskForm onAdd={addTaskHandler} />
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onUpdateStatus={updateTaskStatusHandler}
        onDelete={deleteTaskHandler}
      />
    </div>
  );
};

export default App;
