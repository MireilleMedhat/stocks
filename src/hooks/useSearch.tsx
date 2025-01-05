import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../constants";
import { debounce } from "lodash";

const useSearch = (searchText: string): any => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = useMemo(
    () =>
      debounce(async (searchText: string) => {
        setLoading(true);
        try {
          const response = await axios.get(
            `${BASE_URL}&search=${searchText}&apiKey=${API_KEY}`
          );
          setData(response?.data);
        } catch (err: any) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }, 300),
    []
  );

  useEffect(() => {
    fetchData(searchText);
    return () => {
      fetchData.cancel();
    };
  }, [searchText, fetchData]);

  return { data, loading, error };
};

export default useSearch;
