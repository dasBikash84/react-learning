import EventList from '../components/events/event-list';
import { getFeaturedEventsFromFb } from '../utils/firebase-utils';

// Impl by  getStaticProps no loading or error handling in component.
export default function FeaturedEvents(props) {
  return <EventList items={props.eventsData} />;
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
