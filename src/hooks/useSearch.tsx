import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { API_KEY, BASE_URL } from '../constants';

const useSearch = (searchText: string) => {
  const [data, setData] = useState<any[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(`${BASE_URL}&apiKey=${API_KEY}`);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    debounce(async (url: string) => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData((prevData) => [...prevData, ...response?.data?.results]);
        const next = response.data.next_url ?
          `${response.data.next_url}&apiKey=${API_KEY}` :
          `${BASE_URL}&apiKey=${API_KEY}`;
        setNextUrl(next);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    fetchData(`${BASE_URL}&search=${searchText}&apiKey=${API_KEY}`);
    return () => {
      fetchData.cancel();
    };
  }, [searchText, fetchData]);

  return { data, loading, error, loadMore: () => fetchData(nextUrl || '') };
};

export default useSearch;
