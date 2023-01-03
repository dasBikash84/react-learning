import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import useFirebaseFetch from '../../components/hooks/firebase-fetch';
import ErrorAlert from '../../components/ui/error-alert';

export default function AllEvents() {
  const router = useRouter();

  const searchTask = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  const { data, error, isLoading } = useFirebaseFetch(
    'https://react-test-5b8ab-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );

  if (error) {
    return (
      <ErrorAlert>
        <p>{data.error}</p>
      </ErrorAlert>
    );
  }

  if (isLoading) {
    return (
      <ErrorAlert>
        <p>Loading.....</p>
      </ErrorAlert>
    );
  }

  if (!data) {
    return (
      <ErrorAlert>
        <p>No data.....</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventsSearch onSearch={searchTask} />
      <EventList items={data} />
    </Fragment>
  );
}
