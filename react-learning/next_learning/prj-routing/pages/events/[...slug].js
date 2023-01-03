import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy-data';

export default function EventsAllCatch() {
  const router = useRouter();

  const { query } = router;

  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  console.log(router.pathname);
  console.log('query', router.query);

  useEffect(() => {
    if (query.slug) {
      const [yearData, monthData] = query.slug.map((d) => +d);
      setYear(yearData);
      setMonth(monthData);
    }
  }, [query]);

  if (!month || !year) {
    return (
      <ErrorAlert>
        <p>No events found...</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({ year: year, month: month });

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
