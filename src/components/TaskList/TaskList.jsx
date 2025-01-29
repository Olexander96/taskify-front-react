// components/TaskList/TaskList.jsx
import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onUpdateStatus, onDelete }) => {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.task_id}
          task={task}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
