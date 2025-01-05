import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants';

const useSearch = (searchText: string): any => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}&search=${searchText}&apiKey=${API_KEY}`)
      .then(function (response) {
        setData(response?.data);
      })
      .catch(function (error) {
        setError(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [searchText]);

  return { data, loading, error };
};

export default useSearch;
