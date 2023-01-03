import { useEffect, useState } from 'react';
import EventList from '../components/events/event-list';
import useFirebaseFetch from '../components/hooks/firebase-fetch';
import ErrorAlert from '../components/ui/error-alert';

export default function FeaturedEvents() {
  const [featuredEvents, setFeatruedEvents] = useState();

  const { data, error, isLoading } = useFirebaseFetch(
    'https://react-test-5b8ab-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );

  useEffect(() => {
    if (data) {
      console.log(data);
      setFeatruedEvents(data.filter((item) => item.isFeatured));
    }
  }, [data]);

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

  if (!featuredEvents) {
    return (
      <ErrorAlert>
        <p>No data.....</p>
      </ErrorAlert>
    );
  }

  return <EventList items={featuredEvents} />;
}
