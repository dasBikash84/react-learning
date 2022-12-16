import React, { useContext } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { Fragment } from 'react';
import FirebaseContext from './store/FirebaseContext';

function App() {
  const ctx = useContext(FirebaseContext);

  return (
    <Fragment>
      <NewTask />
      <Tasks
        items={ctx.currentTasks}
        loading={ctx.isLoading}
        error={ctx.error}
        onFetch={ctx.refreshTasks}
        onRemoveTask={ctx.refreshTasks}
      />
    </Fragment>
  );
}

export default App;
