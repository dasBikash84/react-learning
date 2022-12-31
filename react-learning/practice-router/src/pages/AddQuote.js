import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import AppContext from '../store/AppContext';

const AddQuote = () => {
  const linkDetails = useSelector((state) => state.linkDetails.links.nav);
  const history = useHistory();
  const ctx = useContext(AppContext);

  const modalLogTask = () => {
    console.log('New quote added.');
  };

  const onQuoteAddHandler = () => {
    history.push(linkDetails.allQuote.url);
    ctx.displayErrorModal('New quote added.', modalLogTask);
  };

  return <QuoteForm onQuoteAdd={onQuoteAddHandler} />;
};

export default AddQuote;
