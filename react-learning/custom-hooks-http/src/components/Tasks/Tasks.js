import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  const deleteTask = (id) => {
    console.log(id);
    props.onRemoveTask(id);
  };

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem
            taskId={task.id}
            key={task.id}
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            {task.text}
          </TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;
  // console.log(props.error);
  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
