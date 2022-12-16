// import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { useCallFirebaseForTasks } from './components/CustomHooks/UseFirebaseHttp.js';
import { Fragment } from 'react';

function App() {
  const [isLoading, error, tasks, taskAddHandler, fetchTasks] =
    useCallFirebaseForTasks();

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
