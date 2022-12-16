import React, { useState, useEffect, useCallback } from 'react';
import { useCallFirebase } from '../components/CustomHooks/UseFirebaseHttp';

const FirebaseContext = React.createContext({
  currentTasks: [],
  refreshTasks: () => {},
  deleteTask: (taskId) => {},
  isLoading: false,
  error: null,
});

const tasksUrl = `${process.env.REACT_APP_FIREBASE_BASE_PATH}/tasks.json`;

export const FirebaseContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const processTaskData = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const reqData = useCallback(() => fetch(tasksUrl), []);

  const {
    isLoading,
    error,
    callFirebase: fetchTasks,
  } = useCallFirebase(reqData, processTaskData);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <FirebaseContext.Provider
      value={{
        currentTasks: tasks,
        refreshTasks: fetchTasks,
        deleteTask: (taskId) => {},
        isLoading: isLoading,
        error: error,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
