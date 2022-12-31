import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import CommentsList from '../components/comments/CommentsList';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetails = () => {
  const linkDetails = useSelector((state) => state.linkDetails.links);
  const quotes = useSelector((state) => state.quotes.quotes);
  const params = useParams();

  const quote = quotes.find((quote) => quote.id === params.quoteId);

  const commentPageUrl = `/quotes/${quote.id}/add-comment`;

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={linkDetails.quoteDetails.url} exact>
        <div className="centered">
          <Link to={commentPageUrl} className="btn">
            Show Comments
          </Link>
        </div>
      </Route>

      <Route path={linkDetails.addComment.url} exact>
        <Fragment>
          <Comments />
          <CommentsList comments={quote.comments} />
        </Fragment>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
