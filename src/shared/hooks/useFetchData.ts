import axios, { type AxiosError } from "axios";
import { useState, useEffect } from "react";

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchData = <T = unknown>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await axios.get<T>(url);
        if (!cancelled) setData(res.data);
      } catch (err) {
        if (!cancelled) setError((err as AxiosError).message);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    void fetchData();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, isLoading, error };
};
