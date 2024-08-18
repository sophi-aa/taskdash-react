import React, { useState } from 'react';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      if (isEditing) {
        setTasks(tasks.map(task => (task.id === currentTask.id ? { ...task, text: taskText } : task)));
        setIsEditing(false);
        setCurrentTask(null);
      } else {
        setTasks([...tasks, { id: Date.now(), text: taskText }]);
      }
      setTaskText('');
    }
  };

  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setTaskText(task.text);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="tasks-container">
      <h2>Tasks</h2>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit" className="task-submit-button">
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </form>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            {task.text}
            <button onClick={() => handleEditTask(task)} className="task-edit-button">Edit</button>
            <button onClick={() => handleDeleteTask(task.id)} className="task-delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
