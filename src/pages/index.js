import React, { useState } from 'react';

import AppHeader from '../components/TitleText/AppHeader';
import CheckContent from '../components/TitleText/CheckContent';
import Counter from '../components/TitleText/Counter';
import DynamicList from '../components/TitleText/DynamicList';
import SimpleForm from '../components/TitleText/SimpleForm';
import TaskList from '../components/TitleText/TaskList';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ]);

  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <TitleText />
      <AppHeader />
      <CheckContent />
      <Counter />
      <DynamicList n={3} />
      <DynamicList n={5} />
      <TaskList
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
        onToggleCompletion={handleToggleCompletion}
      />
      <SimpleForm />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
