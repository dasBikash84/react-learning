import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  const detailPageUrl = `/quotes/${props.id}`;
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={detailPageUrl}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
