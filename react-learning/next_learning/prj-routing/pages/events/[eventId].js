import { Fragment } from 'react';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventsDataById } from '../../utils/firebase-utils';
import Comments from '../../components/input/comments';

// Impl with getStaticPaths & getStaticProps

function EventDetailPage(props) {
  const { eventData: event } = props;

  if (!event) {
    return (
      <ErrorAlert>
        <p>Loading.....</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const { params } = context;

  const eventId = params.eventId;

  const eventData = await getEventsDataById(eventId);

  if (!eventData || eventData.error) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  return {
    props: {
      eventData: eventData,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { eventId: 'p1' } },
      { params: { eventId: 'p2' } },
      // { params: { eventId: 'p3' } },
    ],
    fallback: true,
    // fallback: 'blocking',
  };
}
