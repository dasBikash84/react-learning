import { Fragment, useContext, useEffect } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

import NoQuotesFound from './NoQuotesFound';
import { useState } from 'react';
import _ from 'underscore';
import { getAllQuotes } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';
import AppContext from '../../store/AppContext';

const QuoteList = () => {
  const ctx = useContext(AppContext);
  const { displayErrorModal } = ctx;
  const {
    sendRequest,
    data: quotes,
    status,
    error,
  } = useHttp(getAllQuotes, false);

  // const quotes = useSelector((state) => state.quotes.quotes);

  const [isDesc, setDesc] = useState(true);

  useEffect(() => {
    if (error !== null) {
      console.log('displaying error modal....');
      displayErrorModal(error);
    }
  }, [displayErrorModal, error]);

  useEffect(() => {
    setTimeout(() => {
      sendRequest();
    }, 50);
  }, [sendRequest]);

  let buttonText = 'Sort Decending';
  if (isDesc) {
    buttonText = 'Sort Ascending';
  }

  let allQuotesData = <NoQuotesFound />;
  let sortedQuotes = [];

  if (quotes != null) {
    sortedQuotes = _.sortBy(quotes, 'text');
    if (isDesc) {
      sortedQuotes = sortedQuotes.reverse();
    }
    console.log(sortedQuotes);

    if (sortedQuotes.length > 0) {
      allQuotesData = (
        <ul className={classes.list}>
          {sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      );
    }
  }

  console.log(quotes);

  const sortChangeHandler = () => {
    setDesc((prev) => !prev);
  };

  return (
    <Fragment>
      {status !== 'completed' && (
        <div className="loading">
          <LoadingSpinner />
        </div>
      )}

      <div className={classes.sorting}>
        {sortedQuotes.length > 0 && (
          <button onClick={sortChangeHandler}>{buttonText}</button>
        )}
      </div>
      {status === 'completed' && allQuotesData}
    </Fragment>
  );
};

export default QuoteList;
