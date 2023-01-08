import { Fragment } from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEventsFromFb } from '../utils/firebase-utils';

import NewsletterRegistration from '../components/input/newsletter-registration';

// Impl by  getStaticProps no loading or error handling in component.
export default function FeaturedEvents(props) {
  return (
    <Fragment>
      <NewsletterRegistration />
      <EventList items={props.eventsData} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const allEvents = await getFeaturedEventsFromFb();

  if (!allEvents || allEvents.error) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  return {
    props: {
      eventsData: allEvents,
    },
    revalidate: 10,
  };
}
