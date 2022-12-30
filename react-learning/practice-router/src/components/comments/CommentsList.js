import { Fragment } from 'react';
import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {
  console.log(props.comments.length);
  return (
    <div className={classes.comments}>
      {props.comments.length > 0 && <p>Comments...</p>}
      {props.comments.length <= 0 && <p>No comments were added yet</p>}
      <ul>
        {props.comments.map((comment) => (
          <CommentItem key={comment.id} text={comment.text} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
