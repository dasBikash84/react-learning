import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import CommentsList from '../comments/CommentsList';
import HighlightedQuote from './HighlightedQuote';

const QuoteDetails = () => {
  const quotes = useSelector((state) => state.quotes.quotes);
  const params = useParams();

  const quote = quotes.find((quote) => quote.id === params.quoteId);

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Comments quoteId={quote.id} />
      <CommentsList comments={quote.comments} />
    </Fragment>
  );
};

export default QuoteDetails;
