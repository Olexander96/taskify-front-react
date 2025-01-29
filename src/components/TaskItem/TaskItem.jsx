import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ task, onUpdateStatus, onDelete }) => {
  return (
    <div
      className={`${styles.item} ${
        task.status === 'in_progress' ? styles.item_in_progress : ''
      } ${task.status === 'completed' ? styles.item_completed : ''}`}
    >
      <span className={styles.text}>
        <b>Title:</b> {task.title}
      </span>
      <span className={styles.text}>
        <b>Descriptoon:</b> {task.text}
      </span>
      <select
        value={task.status}
        onChange={(e) => onUpdateStatus(task.task_id, e.target.value)}
        className={styles.select}
      >
        <option value="new">New</option>
        <option value="in_progress">In progress</option>
        <option value="completed">Completed</option>
      </select>
      <div className={styles.bottom_block}>
        <div className={styles.timeInfo}>
          <span className={styles.timeLabel}>Created:</span>
          <span className={styles.timeValue}>{task.created_date}</span>
        </div>
        <button
          onClick={() => onDelete(task.task_id)}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
