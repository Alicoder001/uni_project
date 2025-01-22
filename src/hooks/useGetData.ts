import { useEffect, useState } from "react";
import { getFetchData } from "../lib/getFetchData";

export const useGetData = (filename: string) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFetch = async () => {
      try {
        setLoading(true);
        const data = await getFetchData(filename);
        setData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load translations.");
      } finally {
        setLoading(false);
      }
    };

    fetchFetch();
  }, [filename]);

  return { data, loading, error };
};
