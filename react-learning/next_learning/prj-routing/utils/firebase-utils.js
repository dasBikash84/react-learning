const FIREBASE_ALL_EVENTS_BASE_URL =
  'https://react-test-5b8ab-default-rtdb.asia-southeast1.firebasedatabase.app/events-obj';

export const FIREBASE_ALL_EVENTS_URL = `${FIREBASE_ALL_EVENTS_BASE_URL}.json`;

export default async function readAllEventsFromFriebase() {
  const allEventsObj = await readFromFriebaseRealTimeDb(
    FIREBASE_ALL_EVENTS_URL
  );
  return Object.values(allEventsObj);
}

export async function getEventsDataById(id) {
  return readFromFriebaseRealTimeDb(getEventsPathById(id));
}

async function readFromFriebaseRealTimeDb(url) {
  let fbData;
  console.log(`calling firebase: ${url}`);
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
  return `${FIREBASE_ALL_EVENTS_BASE_URL}/${id}.json`;
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
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
