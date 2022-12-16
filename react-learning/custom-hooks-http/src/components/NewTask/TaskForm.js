import React, { useImperativeHandle, useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props, ref) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  const getValue = () => taskInputRef.current.value;

  useImperativeHandle(
    ref,
    () => {
      return {
        curentValue: getValue,
      };
    },
    []
  );

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default React.forwardRef(TaskForm);
