import { useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import AppContext from '../../store/AppContext';
import { quoteActions } from '../../store/quotes-slice';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const ctx = useContext(AppContext);

  const { sendRequest, status, error } = useHttp(addComment, false);

  const commentTextRef = useRef();
  // const dispatcher = useDispatch();

  useEffect(() => {
    if (error !== null) {
      console.log('displaying error modal....');
      ctx.displayErrorModal(error);
    }
  }, [error]);

  useEffect(() => {
    if (status === 'completed') {
      commentTextRef.current.value = '';
      props.requestCommentsReload();
    }
  }, [status]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value.trim();
    // optional: Could validate here
    console.log(enteredText.length);
    if (enteredText.length > 0)
      // send comment to server{
      // dispatcher(
      // quoteActions.addComment({ quoteId: props.quoteId, text: enteredText })
      // );
      sendRequest({
        quoteId: props.quoteId,
        commentData: { text: enteredText },
      });
    // commentTextRef.current.value = '';
  };
  console.log(props.quoteId);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
