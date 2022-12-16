import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { useCallFirebase } from './components/CustomHooks/UseFirebaseHttp.js';
import { Fragment } from 'react';

const tasksUrl = `${process.env.REACT_APP_FIREBASE_BASE_PATH}/tasks.json`;

function App() {
  const [tasks, setTasks] = useState([]);

  const processTaskData = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const reqData = useCallback(() => fetch(tasksUrl), []);

  const { isLoading, error, fetchTasks } = useCallFirebase(
    reqData,
    processTaskData
  );

  const taskAddHandler = useCallback((task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </Fragment>
  );
}

export default App;