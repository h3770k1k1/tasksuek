import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const TaskList = ({ tasks, onRemoveTask, onToggleCompletion }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '20px',
      }}
    >
      <h2>Advanced Task List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              border: `2px solid ${task.completed ? 'green' : 'red'}`,
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '10px',
              width: '20vw',
            }}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => onToggleCompletion(task.id)}
            />
            <span
              style={{
                marginLeft: '10px',
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <Button
              variant="contained"
              size="large"
              color="error"
              onClick={() => onRemoveTask(task.id)}
              style={{ marginLeft: 'auto' }}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
