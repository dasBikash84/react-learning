import { Fragment, useEffect, useState } from 'react';
import EventList from '../components/events/event-list';
import EventsSearch from '../components/events/events-search';
import ErrorAlert from '../components/ui/error-alert';
import readAllEventsFromFriebase from '../utils/firebase-utils';

//All events with getServerSideProps
export default function AllEvents(props) {
  const { eventsData } = props;

  const searchTask = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  if (eventsData && eventsData.error) {
    return (
      <ErrorAlert>
        <p>{eventsData.error}</p>
      </ErrorAlert>
    );
  }

  if (eventsData) {
    return (
      <Fragment>
        <EventsSearch onSearch={searchTask} />
        <EventList items={eventsData} />
      </Fragment>
    );
  }

  return (
    <ErrorAlert>
      <p>No data.....</p>
    </ErrorAlert>
  );
}

export async function getServerSideProps() {
  const allEvents = await readAllEventsFromFriebase();

  return {
    props: {
      eventsData: allEvents,
    },
  };
}
