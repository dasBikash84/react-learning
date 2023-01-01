import { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { Routes, useNavigate } from 'react-router-dom/dist';
import Comments from '../components/comments/Comments';
import CommentsList from '../components/comments/CommentsList';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllComments, getSingleQuote } from '../lib/api';
import AppContext from '../store/AppContext';

const QuoteDetails = () => {
  const params = useParams();
  const ctx = useContext(AppContext);
  const [comments, setComments] = useState(null);
  const navigate = useNavigate();
  const { displayErrorModal } = ctx;
  const { quoteId } = params;
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
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    if (error !== null || commentsFetchError != null) {
      console.log('displaying error modal....');
      displayErrorModal(error || commentsFetchError);
    }
  }, [error, commentsFetchError, displayErrorModal]);

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
  // console.log('location', location);
  // console.log('route match', match);

  const requestCommentsReload = useCallback(() => {
    requestComments(quoteId);
  }, [requestComments, quoteId]);

  const showCommentsHandler = () => {
    requestCommentsReload();
    navigate(commentPageUrl);
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
      <Routes>
        <Route
          path=""
          element={
            <div className="centered">
              <button onClick={showCommentsHandler} className="btn">
                Show Comments
              </button>
            </div>
          }
        />

        <Route
          path="add-comment"
          element={
            <Fragment>
              {commentsFetchStatus === null && requestCommentsReload()}
              <Comments requestCommentsReload={requestCommentsReload} />
              {comments && <CommentsList comments={comments} />}
            </Fragment>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetails;
