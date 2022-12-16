import { useCallback, useRef } from 'react';
import { useCallFirebase } from '../CustomHooks/UseFirebaseHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const taskInputRef = useRef();
  const processTaskData = useCallback(
    (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = {
        id: generatedId,
        text: taskInputRef.current.curentValue(),
      };

      props.onAddTask(createdTask);
    },
    [props.onAddTask]
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
