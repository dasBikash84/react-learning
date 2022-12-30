import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  const linkDetails = useSelector((state) => state.linkDetails.links.nav);

  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link to={linkDetails.addQuote.url} className="btn">
        {linkDetails.addQuote.text}
      </Link>
    </div>
  );
};

export default NoQuotesFound;
