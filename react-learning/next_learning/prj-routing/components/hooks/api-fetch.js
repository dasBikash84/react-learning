import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const beApiFetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((resJson) => {
      const data = resJson.data;
      console.log(data);
      return data;
    })
    .catch((er) => {
      console.log('fetch error:', er);
      return er.error;
    });

export default function useFirebaseFetch(url) {
  const { data, isLoading } = useSWR(url, fetcher);

  const error = data && data.error;

  return { data, error, isLoading };
}

export function useBeApiFetch(url) {
  const { data, isLoading } = useSWR(url, beApiFetcher);

  const error = data && data.error;

  return { data, error, isLoading };
}
