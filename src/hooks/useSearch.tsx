import { useState, useEffect } from 'react';
import { useSearchStocksQuery } from '../services/stockApi';

const useSearch = (initialSearchText = '') => {
  const [searchText, setSearchText] = useState(initialSearchText);
  const [results, setResults] = useState<any[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [nextUrlTemp, setNextUrlTemp] = useState<string | null>(null);

  const { data, isLoading, error, refetch } = useSearchStocksQuery({
    searchText,
    nextUrl,
  });

  useEffect(() => {
    if (data) {
      setResults((prevResults) =>
        nextUrl ? [...prevResults, ...data.results] : data.results
      );
      setNextUrlTemp(data.nextUrl);
    }
  }, [data, nextUrl]);

  const triggerSearch = (newSearchText: string) => {
    setSearchText(newSearchText);
    setNextUrl(null);
    setResults([]);
    refetch();
  };

  const loadMore = () => {
    console.log("LOAD MORE!!")
    if (nextUrlTemp) {
      setNextUrl(nextUrlTemp);
    }
  };

  return {
    searchText,
    setSearchText: triggerSearch,
    results,
    loadMore,
    hasMore: !!nextUrlTemp,
    isLoading,
    error,
  };
};

export default useSearch;
