import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  console.log(props.taskId);
  return (
    <li className={classes.task} onClick={props.onClick}>
      {props.children}
    </li>
  );
};

export default TaskItem;
