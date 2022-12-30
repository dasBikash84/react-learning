import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { quoteActions } from '../../store/quotes-slice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const QuoteForm = (props) => {
  const linkDetails = useSelector((state) => state.linkDetails.links);
  const dispatcher = useDispatch();
  const history = useHistory();

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value.trim();
    const enteredText = textInputRef.current.value.trim();

    // optional: Could validate here

    // props.onAddQuote({ author: enteredAuthor, text: enteredText });
    if (enteredAuthor.length > 0 && enteredText.length > 0) {
      dispatcher(
        quoteActions.addQuote({ author: enteredAuthor, text: enteredText })
      );

      history.push(linkDetails.allQuote.url);
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
