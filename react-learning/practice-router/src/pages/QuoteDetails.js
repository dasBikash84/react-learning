import { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import CommentsList from '../components/comments/CommentsList';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllComments, getSingleQuote } from '../lib/api';
import AppContext from '../store/AppContext';

const QuoteDetails = () => {
  const linkDetails = useSelector((state) => state.linkDetails.links);
  const params = useParams();
  const ctx = useContext(AppContext);
  const location = useLocation();
  const match = useRouteMatch();
  const [comments, setComments] = useState(null);
  const history = useHistory();

  const {
    sendRequest,
    data: quote,
    status,
    error,
  } = useHttp(getSingleQuote, false);

  const {
    sendRequest: requestComments,
    data: commentsData,
    status: commentsFetchStatus,
    error: commentsFetchError,
  } = useHttp(getAllComments, false);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, []);

  useEffect(() => {
    if (error !== null || commentsFetchError != null) {
      console.log('displaying error modal....');
      ctx.displayErrorModal(error || commentsFetchError);
    }
  }, [error, commentsFetchError]);

  useEffect(() => {
    if (commentsData) {
      console.log(commentsData);
      setComments(commentsData);
    }
  }, [commentsData]);

  // const quotes = useSelector((state) => state.quotes.quotes);

  // const quote = quotes.find((quote) => quote.id === params.quoteId);

  const commentPageUrl = `/quotes/${params.quoteId}/add-comment`;
  console.log(params.quoteId);
  console.log('location', location);
  console.log('route match', match);

  const requestCommentsReload = useCallback(() => {
    requestComments(params.quoteId);
  }, []);

  const showCommentsHandler = () => {
    requestCommentsReload();
    history.push(commentPageUrl);
  };

  return (
    <Fragment>
      {status !== 'completed' && (
        <div className="loading">
          <LoadingSpinner />
        </div>
      )}

      {status === 'completed' && quote != null && (
        <HighlightedQuote text={quote.text} author={quote.author} />
      )}

      <Route path={linkDetails.quoteDetails.url} exact>
        <div className="centered">
          <button onClick={showCommentsHandler} className="btn">
            Show Comments
          </button>
        </div>
      </Route>

      {
        <Route path={linkDetails.addComment.url} exact>
          <Fragment>
            {commentsFetchStatus === null && requestCommentsReload()}
            <Comments requestCommentsReload={requestCommentsReload} />
            {comments && <CommentsList comments={comments} />}
          </Fragment>
        </Route>
      }
    </Fragment>
  );
};

export default QuoteDetails;
