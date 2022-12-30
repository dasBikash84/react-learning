import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

import NoQuotesFound from './NoQuotesFound';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import _ from 'underscore';

const QuoteList = () => {
  const quotes = useSelector((state) => state.quotes.quotes);

  const [isDesc, setDesc] = useState(true);

  let buttonText = 'Sort Decending';
  if (isDesc) {
    buttonText = 'Sort Ascending';
  }

  console.log(quotes);

  let allQuotesData = <NoQuotesFound />;

  let sortedQuotes = _.sortBy(quotes, 'text');
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

  const sortChangeHandler = () => {
    setDesc((prev) => !prev);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        {sortedQuotes.length > 0 && (
          <button onClick={sortChangeHandler}>{buttonText}</button>
        )}
      </div>
      {allQuotesData}
    </Fragment>
  );
};

export default QuoteList;
