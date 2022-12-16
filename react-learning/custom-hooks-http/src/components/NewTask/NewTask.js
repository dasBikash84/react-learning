import { useCallback, useContext, useRef } from 'react';
import FirebaseContext from '../../store/FirebaseContext';
import { useCallFirebase } from '../CustomHooks/UseFirebaseHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const ctx = useContext(FirebaseContext);

  const taskInputRef = useRef();
  const processTaskData = useCallback(
    (data) => {
      ctx.refreshTasks();
    },
    [ctx]
  );

  const reqData = useCallback(
    () =>
      fetch(`${process.env.REACT_APP_FIREBASE_BASE_PATH}/tasks.json`, {
        method: 'POST',
        body: JSON.stringify({ text: taskInputRef.current.curentValue() }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    []
  );

  const {
    isLoading,
    error,
    callFirebase: fetchTasks,
  } = useCallFirebase(reqData, processTaskData);

  const enterTaskHandler = (userText) => {
    console.log(`User data: ${userText}`);
    fetchTasks();
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        loading={isLoading}
        ref={taskInputRef}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
