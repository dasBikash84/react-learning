export const FIREBASE_ALL_EVENTS_URL =
  'https://react-test-5b8ab-default-rtdb.asia-southeast1.firebasedatabase.app/events.json';

export default async function readAllEventsFromFriebase() {
  return readFromFriebaseRealTimeDb(FIREBASE_ALL_EVENTS_URL);
}

export async function getEventsDataById(id) {
  return readFromFriebaseRealTimeDb(getEventsPathById(id));
}

async function readFromFriebaseRealTimeDb(url) {
  let fbData;
  console.log('calling firebase....');
  try {
    const res = await fetch(url);
    fbData = await res.json();
  } catch (error) {
    fbData = { error: error.message };
  }
  console.log('Firebase data: ', fbData);
  return fbData;
}

function getEventsPathById(id) {
  return `https://react-test-5b8ab-default-rtdb.asia-southeast1.firebasedatabase.app/events-obj/${id}.json`;
}

export async function getFeaturedEventsFromFb() {
  const allEvents = await readAllEventsFromFriebase();
  if (Array.isArray(allEvents)) {
    return allEvents.filter((eventData) => eventData.isFeatured);
  }

  return allEvents;
}

export async function getFilteredEvents(year, month) {
  const allEvents = await readAllEventsFromFriebase();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    console.log(year, eventDate.getFullYear(), eventDate.getMonth(), month);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
