// components/TaskFilter/TaskFilter.jsx
import React from 'react';
import styles from './TaskFilter.module.css';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <button
        className={`${styles.filterButton} ${
          currentFilter === 'all' ? styles.active : ''
        }`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={`${styles.filterButton} ${
          currentFilter === 'new' ? styles.active : ''
        }`}
        onClick={() => onFilterChange('new')}
      >
        New
      </button>
      <button
        className={`${styles.filterButton} ${
          currentFilter === 'in_progress' ? styles.active : ''
        }`}
        onClick={() => onFilterChange('in_progress')}
      >
        In Progress
      </button>
      <button
        className={`${styles.filterButton} ${
          currentFilter === 'completed' ? styles.active : ''
        }`}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
