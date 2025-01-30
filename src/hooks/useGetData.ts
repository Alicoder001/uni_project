import { useEffect, useState, useCallback } from "react";
import { getFetchData } from "../lib/getFetchData";

const cache = new Map(); // Kesh uchun obyekt

export const useGetData = (filename: string) => {
  const [data, setData] = useState(() => cache.get(filename) || {});
  const [loading, setLoading] = useState(!cache.has(filename));
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (cache.has(filename)) {
      setData(cache.get(filename));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const fetchedData = await getFetchData(filename);
      cache.set(filename, fetchedData);
      setData(fetchedData);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  }, [filename]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
