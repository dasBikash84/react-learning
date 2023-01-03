import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useFirebaseFetch(url) {
  const { data, isLoading } = useSWR(url, fetcher);

  const error = data && data.error;

  return { data, error, isLoading };
}
