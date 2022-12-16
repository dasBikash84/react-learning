import { useCallback, useEffect, useState } from 'react';

export const useCallFirebase = (req, processData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callFirebase = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await req();

      console.log(response);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      console.log(data);

      processData(data);
    } catch (err) {
      console.log(err);
      console.log(err.message || 'Something went wrong!');
      setError(err.message || 'Something went wrong!');
    }

    setIsLoading(false);
  }, [req, processData]);

  return { isLoading, error, callFirebase: callFirebase };
};
