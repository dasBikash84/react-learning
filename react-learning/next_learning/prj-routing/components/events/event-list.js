import { Fragment } from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';

export default function EventList(props) {
  const { items } = props;

  console.log(items);

  return (
    <Fragment>
      <ul className={classes.list}>
        {items.map((item) => (
          <li key={item.id}>
            <EventItem
              title={item.title}
              image={item.image}
              date={item.date}
              location={item.location}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
