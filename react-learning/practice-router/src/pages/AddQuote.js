import { useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import QuoteForm from '../components/quotes/QuoteForm';
import AppContext from '../store/AppContext';

const AddQuote = () => {
  const linkDetails = useSelector((state) => state.linkDetails.links.nav);
  const ctx = useContext(AppContext);
  let navigate = useNavigate();

  const modalLogTask = () => {
    console.log('New quote added.');
  };

  const onQuoteAddHandler = useCallback(() => {
    navigate(linkDetails.allQuote.url);
    ctx.displayErrorModal('New quote added.', modalLogTask);
  }, [ctx, navigate, linkDetails.allQuote.url]);

  return <QuoteForm onQuoteAdd={onQuoteAddHandler} />;
};

export default AddQuote;
