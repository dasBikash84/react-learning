import { useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  console.log(props.quoteId);
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={props.quoteId} />}
    </section>
  );
};

export default Comments;
