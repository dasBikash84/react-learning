import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

export default function FeaturedEvents() {
  const featuredEvent = getFeaturedEvents();

  console.log(featuredEvent);

  return <EventList items={featuredEvent} />;
}
