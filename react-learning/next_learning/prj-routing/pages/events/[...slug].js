import { Fragment, useEffect, useState } from 'react';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../utils/firebase-utils';

// Impl with getServerSideProps

export default function EventsAllCatch(props) {
  const { filteredEvents, year, month } = props;
  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <ErrorAlert>
        <p>No events found...</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  console.log(slug);

  if (!Array.isArray(slug) || slug.length != 2) {
    if (Math.random() > 0.5) {
      return {
        redirect: {
          destination: '/events',
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  }
  const year = +slug[0];
  const month = +slug[1];
  const filteredEvents = await getFilteredEvents(year, month);
  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
}
