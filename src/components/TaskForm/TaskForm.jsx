// components/TaskForm/TaskForm.jsx
import React, { useState } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [text, setText] = useState('');
  const [textError, setTextError] = useState(false);
  const [status, setStatus] = useState('new');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && text.trim()) {
      onAdd(title, text, status);
      setTitle('');
      setText('');
      setTitleError(false);
      setTextError(false);
      setStatus('new');
    } else if (!title.trim() && text.trim()) {
      setTitleError(true);
      setTextError(false);
      return false;
    } else if (title.trim() && !text.trim()) {
      setTitleError(false);
      setTextError(true);
      return false;
    } else {
      setTitleError(true);
      setTextError(true);
      return false;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className={styles.input}
        />
        {titleError && (
          <span className={styles.input_error}>titile must be filled</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Task description..."
          className={styles.input}
        />
        {textError && (
          <span className={styles.input_error}>description must be filled</span>
        )}
      </div>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.select}
      >
        <option value="new">New</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
