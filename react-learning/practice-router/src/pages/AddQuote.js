import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
  const linkDetails = useSelector((state) => state.linkDetails.links.nav);
  const history = useHistory();

  const onQuoteAddHandler = () => {
    history.push(linkDetails.allQuote.url);
  };

  return <QuoteForm onQuoteAdd={onQuoteAddHandler} />;
};

export default AddQuote;
