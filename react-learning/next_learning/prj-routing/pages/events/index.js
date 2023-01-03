import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

export default function AllEvents() {
  const allEvents = getAllEvents();
  const router = useRouter();

  const searchTask = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={searchTask} />
      <EventList items={allEvents} />
    </Fragment>
  );
}
