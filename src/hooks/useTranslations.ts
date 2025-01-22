import { useEffect, useState } from "react";
import { getLang } from "../lib/getLang";

export const useTranslations = (locale: string, page: string) => {
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setLoading(true);
        const data = await getLang(locale, page);
        setTranslations(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load translations.");
      } finally {
        setLoading(false);
      }
    };

    fetchTranslations();
  }, [locale, page]);

  return { translations, loading, error };
};
