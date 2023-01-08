import readAllEventsFromFriebase from '../../../utils/firebase-utils';

export default async function handler(req, res) {
  try {
    const allEvents = await readAllEventsFromFriebase();
    return res.status(200).json({ data: allEvents });
  } catch (error) {
    return res.status(500).json({ data: { error: 'Not yet implemented....' } });
  }
}
