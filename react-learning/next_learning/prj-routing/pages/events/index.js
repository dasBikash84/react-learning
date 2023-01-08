import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import ErrorAlert from '../../components/ui/error-alert';
import { useBeApiFetch } from '../../components/hooks/api-fetch';
import readAllEventsFromFriebase from '../../utils/firebase-utils';

// This impl is with getStaticProps and client side refresh.

export default function AllEvents(props) {
  const router = useRouter();
  const [eventsData, setEventsData] = useState(props.eventsData);

  const searchTask = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  // const { data, isLoading } = useFirebaseFetch(FIREBASE_ALL_EVENTS_URL);
  const { data, error, isLoading } = useBeApiFetch('/api/events');

  useEffect(() => {
    if (data && !error) {
      setEventsData(data);
    }
  }, [data, error]);

  console.log('data: ', eventsData, 'error: ', error, 'isLoading:', isLoading);

  if (error) {
    return (
      <ErrorAlert>
        <p>{error}</p>
      </ErrorAlert>
    );
  }

  if (eventsData && eventsData) {
    return (
      <Fragment>
        <EventsSearch onSearch={searchTask} />
        <EventList items={eventsData} />
      </Fragment>
    );
  }

  if (isLoading) {
    return (
      <ErrorAlert>
        <p>Loading.....</p>
      </ErrorAlert>
    );
  }

  return (
    <ErrorAlert>
      <p>No data.....</p>
    </ErrorAlert>
  );
}

export async function getStaticProps() {
  const allEvents = await readAllEventsFromFriebase();

  if (!allEvents || allEvents.error) {
    if (Math.random() > 0.5) {
      return {
        redirect: {
          destination: '/',
          revalidate: 10,
        },
      };
    } else {
      return {
        notFound: true,
        revalidate: 10,
      };
    }
  }
  return {
    props: {
      eventsData: allEvents,
    },
    revalidate: 100,
  };
}
