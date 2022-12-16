import { useState } from 'react';
import { useCallFirebaseToAddTask } from '../CustomHooks/UseFirebaseHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { enterTaskHandler, isLoading, error } =
    useCallFirebaseToAddTask(props);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
